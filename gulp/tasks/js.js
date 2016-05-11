import gulp from 'gulp'
import paths from '../config'
import {TS_SETTINGS} from '../settings'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserSync from 'browser-sync'

const $ = gulpLoadPlugins()
const reload = browserSync.reload
const OnError = $.notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'Error running '
})

gulp.task('js', () =>
  gulp.src(paths.typescript.entry)
  .pipe($.typescript(TS_SETTINGS))
  .on('error', OnError)
  .pipe(gulp.dest(paths.typescript.dest))
  .pipe(reload({stream:true}))
  // .pipe($.notify({
  //   onLast: true,
  //   title: 'Gulp',
  //     message: `TS has been compiled
  //     Total size <%= file.relative %> : ${$.size.prettySize}`
  //   }))
)
