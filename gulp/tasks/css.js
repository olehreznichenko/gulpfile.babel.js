import gulp from 'gulp'
import config from '../config'
import {BROWSERSLIST_CONFIG, RUCKSACK_SETTINGS, NEXT_SETTINGS, PATTERN} from '../settings'
import gulpLoadPlugins from 'gulp-load-plugins'
import postcssLoadPlugins from 'postcss-load-plugins'
import browserSync from 'browser-sync'

let $ = gulpLoadPlugins(PATTERN.gulp)
let post = postcssLoadPlugins(PATTERN.postcss)
let reload = browserSync.reload
let OnError = $.notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'Error running '
})

let POST_PLUGINS = [
  post.autoprefixer(BROWSERSLIST_CONFIG),
  post.rucksackCss(RUCKSACK_SETTINGS),
  post.apply, // TODO: dont work
  post.mqpacker,
  post.atroot, // TODO: dont work
  post.filter,
  post.instagram,
  post.cssnext(null, NEXT_SETTINGS), // TODO: range media dont work
  post.lost
]

gulp.task('css', () =>
  gulp.src(config.paths.stylus.entry)
  .pipe($.stylus({ use: [ $.poststylus(POST_PLUGINS), $.rupture() ] }))
  .on('error', OnError)
  .pipe($.size())
  .pipe(gulp.dest(config.paths.stylus.dest))
  .pipe(reload({ stream: true }))
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
      message: 'Stylus has been compiled\nTotal size <%= file.relative %> :' + $.size.prettySize // FIXME: undefined
    }))
)
