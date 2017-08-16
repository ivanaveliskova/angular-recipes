'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss');

gulp.task('sass', function() {
    return gulp.src('./stylesheets/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions', '>2%']})]))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./stylesheets/**/*.scss', ['sass']);
});

gulp.task('sass:run', ['sass', 'sass:watch']);
