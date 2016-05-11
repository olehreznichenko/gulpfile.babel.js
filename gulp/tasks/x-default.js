import gulp from 'gulp'
import paths from '../config'

gulp.task('watch', () => {
  gulp.watch(paths.pug.components,    gulp.series('pug'))
  gulp.watch(paths.stylus.components, gulp.series('css'))
  gulp.watch(paths.typescript.entry,  gulp.series('js'))
})

gulp.task('default', gulp.parallel('server', 'watch', 'pug', 'css', 'js'))