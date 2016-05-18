'use strict'

const Config = require('../../../config.js').database
const Wrapper = require('./sqlite3.js')

module.exports = new Wrapper(Config.filename)
