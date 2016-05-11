import gulp from 'gulp'
import paths from '../config'
import {RUCKSACK_SETTINGS, NEXT_SETTINGS, PATTERN} from '../settings'
import gulpLoadPlugins from 'gulp-load-plugins'
import postcssLoadPlugins from 'postcss-load-plugins'
import browserSync from 'browser-sync'

const $ = gulpLoadPlugins(PATTERN.gulp)
const post = postcssLoadPlugins(PATTERN.postcss)
const reload = browserSync.reload
const OnError = $.notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'Error running '
})

const POST_PLUGINS = [
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
  gulp.src(paths.stylus.entry)
  .pipe($.stylus({ use: [ $.poststylus(POST_PLUGINS), $.rupture() ] }))
  .on('error', OnError)
  .pipe($.size())
  .pipe(gulp.dest(paths.stylus.dest))
  .pipe(reload({stream:true}))
  // .pipe($.notify({
  //   onLast: true,
  //   title: 'Gulp',
  //     message: `Stylus has been compiled
  //     Total size <%= file.relative %> : ${$.size.prettySize}` // FIXME: undefined
  //   }))
)
