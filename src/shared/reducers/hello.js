'use strict'

const Immutable = require('immutable')

const State = Immutable.Record({
  // text: 'Hello!'
  text: ''
})

const Action = Immutable.Record({
  type: '',
  value: ''
})

module.exports = function(state = {}, action) {
  state = State(state)
  action = Action(action).toJSON()
  switch (action.type) {
    case 'SET_TEXT':
      state = state.set('text', action.value)
    break;
    case 'APPEND_TEXT':
      state = state.set('text', state.get('text') + action.value)
    break;
  }
  return state.toJSON()
}
