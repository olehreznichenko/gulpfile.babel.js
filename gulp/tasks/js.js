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
  gulp.src(config.paths.babel.entry)
  .pipe($.typescript(TSSETTINGS))
  // .pipe($.babel({presets: ['es2015']}))
  .on('error', OnError)
  .pipe(gulp.dest(config.paths.babel.dest))
  .pipe(reload({ stream: true }))
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
      message: 'Babel has been compiled\nTotal size <%= file.relative %> :' + $.size.prettySize
    }))
)
