'use strict'

const express = require('express')
const Labels = require('./models/labels')
const Path = require('path')

var app = express();

app.disable('x-powered-by')

app.use('/public', express.static(
  Path.resolve(__dirname, '../public'),
  {
    maxAge: '1d'
  }
))

app.get('/', async function(req, res) {
  try {
    let l = await Labels
    await l.addOne('F!')
    let result = await l.getAll()
    res.json(result)
  } catch(e) {
    res.status(500).send(err.stack || err)
  }
})

app.listen(3000)
