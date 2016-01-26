import config from '../config'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'

let $ = gulpLoadPlugins()
let reload = browserSync.reload

gulp.task('watch', () => {
  gulp.watch(config.paths.jade.components,   gulp.series('jade'))
  gulp.watch(config.paths.stylus.components, gulp.series('css'))
  gulp.watch(config.paths.babel.entry,       gulp.series('js'))
})

gulp.task('default', gulp.parallel('server', 'watch', 'jade', 'css', 'js'))
