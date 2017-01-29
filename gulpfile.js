'use strict';

var gulp = require('gulp');
var pug  = require('gulp-pug');
var plumber = require("gulp-plumber");
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var path = {
    src: {
        pug: '*.pug',
        scss: 'scss/*.scss'
    },
    dest: {
	html: '',
        css: 'assets/css'
    },
    watch: {
        pug: '*.pug',
        scss: 'scss/**/*.scss'
    }
};

gulp.task('html', function () {
    gulp.src(path.src.pug)
        .pipe(pug({}))
        .pipe(gulp.dest(path.dest.html))
        //.pipe(connect.reload())
});

gulp.task('sass', function() {
  return gulp.src(path.src.scss)
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest(path.dest.css));
});

gulp.task('default', ['html', 'sass'], function() {
  gulp.watch([path.watch.pug], ['html']);
  gulp.watch([path.watch.scss], ['sass']);
});

