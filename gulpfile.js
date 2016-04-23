'use strict'

const Gulp = require('gulp')

require('./gulptasks/babel.js')

Gulp.task('default', ['build'])

Gulp.task('build', [
  'babel'
])
