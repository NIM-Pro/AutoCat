'use strict'

const React = require('react')
const {renderToString} = require('react-dom/server')
const {Provider} = require('react-redux')
const {Router, RouterContext} = require('react-router')
const createView = require('../shared/view')
const createStore = require('../shared/store')

function sequence(items, consumer) {
  const results = [];
  const runner = () => {
    const item = items.shift();
    if (item) {
      return consumer(item)
        .then((result) => {
          results.push(result);
        })
        .then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

function fetchComponentData(store, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent && (current.WrappedComponent.need !== current.need) ? current.WrappedComponent.need : []) || [])
      .concat(prev);
  }, []);

  return sequence(needs, need => store.dispatch(need(params, store.getState())));
}

module.exports = function (props) {
  // let html = renderToString(createView(props))
  let store = createStore()
  return fetchComponentData(store, props.components, props.params)
  .then(() => {
    let html = renderToString(
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>
    )
    return `<!DOCTYPE HTML>
      <html>
        <head>
          <meta charset="utf-8"/>
          <script>window.INITIAL_STATE = ${JSON.stringify(store.getState())}</script>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/public/js/init.js"></script>
        </body>
      </html>`
    .split('\n')
    .map(s => s.trim())
    .join('')
  })
}
