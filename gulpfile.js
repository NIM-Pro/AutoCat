'use strict'

const Gulp = require('gulp')

require('./gulptasks/babel.js')
require('./gulptasks/copy.js')

Gulp.task('default', ['build'])

Gulp.task('build', [
  'babel',
  'copy'
])
