'use strict'

const express = require('express')
const Labels = require('./models/labels')

var app = express();
app.get('/', async function(req, res) {
  try {
    let l = await Labels
    await l.addOne('F!')
    let result = await l.getAll()
    res.json(result)
  } catch(e) {
    res.status(500).send(err.stack || err)
  }
});
app.listen(3000);
