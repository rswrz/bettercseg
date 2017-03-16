var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		cssnano = require('gulp-cssnano'),
		uglify = require('gulp-uglify'),
		header = require('gulp-header'),
		wrap = require('gulp-wrap'),
		fs = require('fs'),
		browserSync = require('browser-sync').create(),
		proxy = require('http-proxy-middleware');

var styleDir = "./src/style_cseg451";

gulp.task('style', function() {
	gulp.src(styleDir+'/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('style.min.css'))
			.pipe(cssnano())
			.pipe(header(fs.readFileSync('./src/txt/head_css.txt')))
			.pipe(gulp.dest('./dist/'));
})

gulp.task('js', function() {
	gulp.src('./src/js/**/*.js')
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(wrap('!function(){"use strict";<%= contents %>}();'))
		.pipe(header(fs.readFileSync('./src/txt/head_js.txt')))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
	gulp.watch([styleDir+'/**/*.scss', 'src/txt/head_css.txt'], ['style']);
	gulp.watch(['./src/js/**/*.js', './src/txt/head_js.txt'], ['js']);
})

gulp.task('default', ['js', 'style', 'watch']);
