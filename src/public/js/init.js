'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const {match, RouterContext} = require('react-router')
const routes = require('../../shared/routes')
const createView = require('../../shared/view')

let Root = document.getElementById('root')

match({routes, location}, (err, redirect, props) => {
  if (err)
    return alert(err)
  if (redirect)
    return location.href = Url.format(redirect)

  console.log()
  ReactDOM.render(
    createView(props, window.INITIAL_STATE),
    Root
  )
})
