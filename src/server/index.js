'use strict'

const express = require('express')
const Labels = require('./models/labels')
const Path = require('path')
const {match} = require('react-router')
const routes = require('./shared/routes')
const Url = require('url')
const createStore = require('./shared/store')
const renderView = require('./view/render')

var app = express();

app.disable('x-powered-by')

app.get('/public', (req,res,next) => {
  console.log(req.url)
  next()
})

app.use('/public', express.static(
  Path.resolve(__dirname, '../public'),
  {
    maxAge: '1d'
  }
))

app.use((req, res, next) => {
  console.log('Have a request on', req.url)
  match({routes, location: req.url}, (err, redirect, props) => {
    console.log('Handling a request on', req.url)
    if (err)
      return res.status(500).end(err.stack || err)
    console.log('Not an error')
    if (redirect)
      return res.redirect(302, Url.format(redirect))
    console.log('Not an redirect')
    if (!props)
      return next()
    console.log('Processing a request on', req.url)
    renderView(props)
    .then(html => res.status(200).end(html))
    .catch(err => res.status(500).end(err.stack || err))
  })
})

app.route('/api').get((req, res) => {
  res.json({text: 'Hello, world!'})
})

app.listen(80)
