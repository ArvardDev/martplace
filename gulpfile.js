let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');


gulp.task('scss', function () {
	return gulp.src('app/scss/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }))/* or compressed */
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 20 versions'],
			cascade: false
		}))
		// .pipe(rename({suffix: '.min'}))/* if compressed */
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
	return gulp.src('app/css/media.css')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
	return gulp.src('app/js/*.js')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('style', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/rateyo/src/jquery.rateyo.css',
		'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
		'node_modules/magnific-popup/dist/magnific-popup.css'
	])
		.pipe(concat('libs.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('app/css'))
});

gulp.task('script', function () {
	return gulp.src([
		'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/rateyo/src/jquery.rateyo.js',
		'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
		'node_modules/mixitup/dist/mixitup.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	});
});

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
	gulp.watch('app/css/media.css', gulp.parallel('css'))
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('script', 'style', 'scss', 'browser-sync', 'watch'));
