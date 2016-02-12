import gulp from 'gulp'
import config from '../config'
import {TSSETTINGS} from '../settings'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserSync from 'browser-sync'

let $ = gulpLoadPlugins()
let reload = browserSync.reload
let OnError = $.notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'Error running '
})

gulp.task('js', () =>
  gulp.src(config.paths.typescript.entry, {since: gulp.lastRun('js')})
  .pipe($.newer(config.paths.typescript.dest))
  .pipe($.typescript(TSSETTINGS))
  .on('error', OnError)
  .pipe(gulp.dest(config.paths.typescript.dest))
  .pipe(reload({ stream: true }))
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
      message: `TS has been compiled
      Total size <%= file.relative %> : ${$.size.prettySize}`
    }))
)
