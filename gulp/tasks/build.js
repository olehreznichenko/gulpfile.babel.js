import gulp from 'gulp'
import browserSync from 'browser-sync'
import config from '../config'
import gulpLoadPlugins from 'gulp-load-plugins'
import {HTMLMIN_SETTINGS, UGLIFY_SETTINGS, PATTERN} from '../settings'

let $ = gulpLoadPlugins(PATTERN.gulp)

gulp.task('html-b', () =>
  gulp.src([ config.paths.jade.dest, config.paths.build.css + '/*.css' ])
  .pipe($.w3cjs())
  .pipe($.selectors.run())
  .pipe($.htmlmin(HTMLMIN_SETTINGS))
  .pipe(gulp.dest(config.paths.build.entry))
)

//Build css
gulp.task('css-b', () =>
  gulp.src(config.paths.stylus.dest + '/*.css')
  .pipe($.concatCss(config.names.css))
  .pipe($.purifycss([config.paths.build.js + '/*.js', config.paths.build.entry + '/*.html']))
  .pipe($.cssnano())
  .pipe(gulp.dest(config.paths.build.css))
)
// gulp-newer gulp-cached gulp-changed gulp-remember
//Build js
gulp.task('js-b', () =>
  gulp.src(config.paths.babel.dest + '/*.js')
  .pipe($.concat(config.names.js))
  .pipe($.uglify(UGLIFY_SETTINGS))
  .pipe(gulp.dest(config.paths.build.js))
)

//Build images
gulp.task('images', () =>
  gulp.src(config.paths.images.entry)
  .pipe($.imagemin({ optimizationLevel: 5 }))
  .pipe(gulp.dest(config.paths.images.dest))
)


gulp.task('critical', () =>
    $.critical.generate({
        inline: true,
        base: 'app/build/',
        src: 'index.html',
        css: [config.paths.build.css+'/' + config.names.css],
        dest: config.paths.build.entry + '/index.html',
        width: 320,
        height: 480,
        minify: true
}))

//Build
gulp.task('build', gulp.series('html-b', 'js-b', 'css-b', 'images', 'critical', () =>
  gulp.src(config.paths.build.entry + '/**/*')
  .pipe($.webstandards())
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
      message: 'Build Done!\nTotal size project :' + $.size.prettySize
    }))
))
