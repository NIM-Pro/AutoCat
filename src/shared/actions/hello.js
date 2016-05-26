'use strict'

const fetch = require('isomorphic-fetch')

function onlyValue(eventType) {
  return function(value) {
    return {
      type: eventType,
      value
    }
  }
}

module.exports.appendText = onlyValue('APPEND_TEXT')
module.exports.setText = onlyValue('SET_TEXT')

module.exports.fetchData = function() {
  console.log('Fetching state')
  return dispatch => {
    return fetch('http://localhost/api')
    .then(res => res.text())
    .then(JSON.parse)
    .then(state => {
      dispatch(module.exports.setText(state.text))
    })
  }
}
