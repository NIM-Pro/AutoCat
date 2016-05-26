'use strict'

const Gulp = require('gulp')
const Babel = require('gulp-babel')
const Browserify = require('gulp-browserify')
const Merge = require('merge2')

const Config = require('../config.js')

Gulp.task('babel', [
  // 'babel:client',
  'babel:server'
])

function doIt(babelConfig, pathsConfig, addiction) {
  return Merge.apply(
    null,
    pathsConfig.map(obj => {
      let r = Gulp.src(obj.src)
      .pipe(Babel(babelConfig))
      // if (addiction)
      //   r = r.pipe(addiction)
      return r.pipe(Gulp.dest(obj.dest))
    })
  )
}

Gulp.task('babel:client', () => {
  return doIt(Config.babel.client, Config.paths.transpile.client.js)
})

Gulp.task('babel:server', () => {
  return doIt(Config.babel.server, Config.paths.transpile.server.js)
})
