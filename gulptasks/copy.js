'use strict'

const Gulp = require('gulp')
const Merge = require('merge2')

const Config = require('../config.js')

Gulp.task('copy', () => {
  return Merge.apply(
    null,
    Config.paths.copy.map(path =>
      Gulp.src(path.src)
      .pipe(Gulp.dest(path.dest))
    )
  )
})
