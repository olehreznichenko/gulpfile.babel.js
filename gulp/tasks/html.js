import gulp from 'gulp'
import config from '../config'
import {PATTERN} from '../settings'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'
let $ = gulpLoadPlugins(PATTERN.gulp)
let reload = browserSync.reload

import bem from 'posthtml-bem'
// import posthtml from 'gulp-posthtml'

gulp.task('jade', () =>
	gulp.src(config.paths.jade.entry)
	.pipe($.jade({
		pretty: true
	}))
	.pipe($.posthtml([bem({
		elemPrefix: '--',
		modPrefix: '_',
	})]))
	.pipe(gulp.dest(config.paths.jade.dest))
	.pipe(reload({ stream: true }))
	.pipe($.notify({
		onLast: true,
		title: 'Gulp',
			message: `Stylus has been compiled
      Total size <%= file.relative %> : ${$.size.prettySize}` // FIXME: undefined
		}))
)
