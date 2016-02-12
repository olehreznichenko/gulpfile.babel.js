import gulp from 'gulp'
import browserSync from 'browser-sync'
import config from '../config'
import gulpLoadPlugins from 'gulp-load-plugins'
import {HTMLMIN_SETTINGS, UGLIFY_SETTINGS, PATTERN} from '../settings'

let $ = gulpLoadPlugins(PATTERN.gulp)

gulp.task('html-b', () =>
  gulp.src(config.paths.jade.dest + '*.html')
  .pipe($.w3cjs())
  // .pipe($.selectors.run()) FIXME: Herovo work plugin
  .pipe($.htmlmin(HTMLMIN_SETTINGS))
  .pipe(gulp.dest(config.paths.build.entry))
)

gulp.task('css-b', () =>
  gulp.src(config.paths.stylus.dest + '/*.css')
  .pipe($.concatCss(config.names.css))
  .pipe($.purifycss([config.paths.build.js + '/*.js', config.paths.build.entry + '/*.html']))
  .pipe($.cssnano())
  .pipe(gulp.dest(config.paths.build.css))
)

gulp.task('js-b', () =>
  gulp.src(config.paths.typescript.dest + '/*.js')
  .pipe($.concat(config.names.js))
  .pipe($.uglify(UGLIFY_SETTINGS))
  .pipe(gulp.dest(config.paths.build.js))
)

gulp.task('images', function () {
  return gulp.src(config.paths.images.entry)
  .pipe($.newer(config.paths.images.dest))
  .pipe($.imagemin({ optimizationLevel: 5 }))
  .pipe(gulp.dest(config.paths.images.dest))
})

gulp.task('svg', () =>
  gulp.src(config.paths.svg.entry)
  .pipe($.svgmin())
  .pipe(gulp.dest(config.paths.svg.dest))
)

gulp.task('critical', () =>
    $.critical.generate({
        inline: true,
        base: config.paths.build.entry,
        src: 'index.html',
        css: [config.paths.build.css+'/' + config.names.css],
        minify: true,
        dest: config.paths.build.entry + '/index.html',
        width: 320,
        height: 480,
        minify: true
})) // FIXME: work herovo

gulp.task('copy', () =>
  gulp.src(config.paths.fonts.entry)
  .pipe(gulp.dest(config.paths.fonts.dest))
)

gulp.task('build', gulp.series('html-b', 'js-b', 'css-b', 'svg', 'images', 'copy', () =>
  gulp.src(config.paths.build.entry + '/**/*')
  .pipe($.webstandards())
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
      message: `Build Done!
      Total size project : ${$.size.prettySize}`
    }))
))
