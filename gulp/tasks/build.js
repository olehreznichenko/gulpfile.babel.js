import gulp from 'gulp'
import {paths} from '../config'
import gulpLoadPlugins from 'gulp-load-plugins'
import {HTMLMIN_SETTINGS, UGLIFY_SETTINGS, PATTERN} from '../settings'

const $ = gulpLoadPlugins(PATTERN.gulp)

gulp.task('html-b', () =>
  gulp.src(paths.pug.dest + '*.html')
  .pipe($.w3cjs())
  // .pipe($.selectors.run()) FIXME: Herovo work plugin
  .pipe($.htmlmin(HTMLMIN_SETTINGS))
  .pipe(gulp.dest(paths.build.entry))
)

gulp.task('css-b', () =>
  gulp.src(paths.stylus.dest + '/*.css')
  .pipe($.concatCss(paths.names.css))
  .pipe($.purifycss([paths.build.js + '/*.js', paths.build.entry + '/*.html']))
  .pipe($.cssnano())
  .pipe(gulp.dest(paths.build.css))
)

gulp.task('ts-b', () =>
  gulp.src(paths.ts.dest + '/*.js')
  .pipe($.concat(paths.names.js))
  .pipe($.uglify(UGLIFY_SETTINGS))
  .pipe(gulp.dest(paths.build.js))
)

gulp.task('images', () =>
  gulp.src(paths.images.entry)
  .pipe($.imagemin({ optimizationLevel: 5 }))
  .pipe(gulp.dest(paths.images.dest))
)

gulp.task('svg', () =>
  gulp.src(paths.svg.entry)
  .pipe($.svgmin())
  .pipe(gulp.dest(paths.svg.dest))
)

gulp.task('critical', () =>
    $.critical.generate({
        inline: true,
        base: paths.build.entry,
        src: 'index.html',
        css: [paths.build.css+'/' + paths.names.css],
        minify: true,
        dest: paths.build.entry + '/index.html',
        width: 320,
        height: 480
})) // FIXME: work herovo

gulp.task('copy_fonts', () =>
  gulp.src(paths.fonts.entry)
  .pipe(gulp.dest(paths.fonts.dest))
)

gulp.task('build', gulp.series('html-b', 'ts-b', 'css-b', 'svg', 'images', 'copy_fonts', () =>
  gulp.src(paths.build.entry + '/**/*')
  .pipe($.webstandards())
  .pipe($.size())
  .pipe($.notify({
    onLast: true,
    title: 'Gulp',
    message: `Build Done! Total size project : ${$.size.prettySize}`
    }))
))
