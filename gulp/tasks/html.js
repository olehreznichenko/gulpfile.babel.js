import gulp from 'gulp'
import config from '../config'
import {PATTERN} from '../settings'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'
import bem from 'posthtml-bem'

let $ = gulpLoadPlugins(PATTERN.gulp)
let reload = browserSync.reload

gulp.task('jade', () =>
	gulp.src(config.paths.jade.entry)
	.pipe($.jade({pretty: true}))
	.pipe($.posthtml([bem({
		elemPrefix: '--',
		modPrefix: '_',
	})]))
	.pipe(gulp.dest(config.paths.jade.dest))
	.pipe(reload({ stream: true }))
	.pipe($.notify({
		onLast: true,
		title: 'Gulp',
			message: 'Stylus has been compiled\nTotal size <%= file.relative %> :' + $.size.prettySize // FIXME: undefined
		}))
)
