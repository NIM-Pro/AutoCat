'use strict'

const React = require('react')
const {Provider} = require('react-redux')
const {Router, RouterContext} = require('react-router')
const createStore = require('./store')

module.exports = function(props, state) {
  let store
  if (arguments.length > 1)
    store = createStore(state)
  else
    store = createStore()
  return <Provider store={store}>
    <RouterContext {...props}/>
  </Provider>
}
