'use strict'

const Gulp = require('gulp')
const Del = require('del')
const Run = require('gulp-run')

require('./gulptasks/babel.js')
require('./gulptasks/browserify.js')
require('./gulptasks/copy.js')

Gulp.task('clear', () => {
  return Run('rd /S /Q product').exec()
})

Gulp.task('default', ['build'])

Gulp.task('build', [
  'babel',
  'browserify',
  'copy'
])
