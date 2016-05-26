'use strict'

const {applyMiddleware, createStore, combineReducers} = require('redux')
const thunk = require('redux-thunk').default
const hello = require('./reducers/hello')

const reducer = combineReducers({
  hello
})

module.exports = function(state) {
  return createStore(
    reducer,
    state,
    applyMiddleware(thunk)
  )
}
