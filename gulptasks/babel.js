'use strict'

const Gulp = require('gulp')
const Babel = require('gulp-babel')
const Merge = require('merge2')

const Config = require('../config.js')

Gulp.task('babel', ['babel:client', 'babel:server'])

function doIt(babelConfig, pathsConfig) {
  return Merge.apply(
    null,
    pathsConfig.map(obj => {
      return Gulp.src(obj.src)
      .pipe(Babel(babelConfig))
      .pipe(Gulp.dest(obj.dest))
    })
  )
}

Gulp.task('babel:client', () => {
  return doIt(Config.babel.client, Config.paths.transpile.client.js)
})

Gulp.task('babel:server', () => {
  return doIt(Config.babel.server, Config.paths.transpile.server.js)
})
