'use strict'

const React = require('react')
const {Provider} = require('react-redux')
const {Router, browserHistory} = require('react-router')
const createStore = () => null

const routes = null

module.exports = function(state) {
  let store
  if (arguments.length > 0)
    store = createStore(state)
  else
    store = createStore()
  return <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
}
