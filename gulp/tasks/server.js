import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('server', () =>
  browserSync({
    server: 'app',
    port: 8080,
    open: 'local',
    browser: 'google chrome'
}))
