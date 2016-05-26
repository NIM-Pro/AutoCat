'use strict'

const React = require('react')
const {Route} = require('react-router')

const HelloPage = require('./pages/index')

module.exports = <Route path="/" component={HelloPage}/>
