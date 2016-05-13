import gulp from 'gulp'
import {paths} from '../config'
import {PATTERN} from '../settings'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'
import bem from 'posthtml-bem'

const $ = gulpLoadPlugins(PATTERN.gulp)
const reload = browserSync.reload

gulp.task('pug', () =>
	gulp.src(paths.pug.entry)
	.pipe($.pug({pretty:true}))
	.pipe($.posthtml([bem({
		elemPrefix: '--',
		modPrefix: '_'
	})]))
	.pipe(gulp.dest(paths.pug.dest))
	.pipe(reload({stream:true}))
	.pipe($.size())
	.pipe($.notify({
	  onLast: true,
	  title: 'Gulp',
	  message: `Pug has been compiled. <%= file.relative %>`
	  }))
)
