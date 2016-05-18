'use strict'

let client = {
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
}

let server = {
  presets: [
    'stage-0',
    'react'
  ],
  plugins: [
    'syntax-async-functions',
    [
      'transform-async-to-module-method',
      {
        module: 'bluebird',
        method: 'coroutine'
      }
    ],
    'transform-es2015-modules-commonjs'
  ]
}

module.exports = {
  client, server
}
