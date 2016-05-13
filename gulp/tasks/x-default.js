import gulp from 'gulp'
import {paths} from '../config'

gulp.task('watch', () => {
  gulp.watch([paths.pug.components, paths.pug.entry],       gulp.series('pug'))
  gulp.watch([paths.stylus.components, paths.stylus.entry], gulp.series('css'))
  gulp.watch(paths.ts.entry,                                gulp.series('ts'))
})

gulp.task('default', gulp.parallel('server', 'watch', 'pug', 'css', 'ts'))
