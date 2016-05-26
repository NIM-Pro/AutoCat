'use strict'

const Gulp = require('gulp')
const Config = require('../config.js')
const Run = require('gulp-run')
const Merge = require('merge2')
const Path = require('path')

Gulp.task('browserify', ()=> {
  return Merge.apply(
    null,
    Config.paths.transpile.client.js.map(path =>
      // Browserify('./src/public/js/init.js')
      // Browserify(path.src)
      // .transform("babelify", {presets: ["es2015", "react", "stage-0"]})
      // .bundle()
      // .pipe(Source(path.filename))
      // .pipe(Gulp.dest(path.dest))
      Run(
        `mkdir ${Path.join(path.dest, '..')} || echo Directory does not created && browserify ${path.src} -o ${path.dest} -t [ babelify --presets [ es2015 react stage-0 ] ]`,
        {
          verbosity: 3
        }
      ).exec()
    )
  )
})
