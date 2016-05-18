'use strict'

const {renderToString} = require('react-dom/server')
const createView = require('../shared/view')

module.exports = function (state) {
  let html = renderToString(createView(state))
  return `<!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="utf-8"/>
        <script>window.INITIAL_STATE = ${JSON.stringify(state)}</script>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>`
  .split('\n')
  .map(s => s.trim())
  .join('')
}
