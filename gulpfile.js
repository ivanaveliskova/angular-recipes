'use strict';

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    postcss         = require('gulp-postcss'),
    deporder        = require('gulp-deporder'),
    concat          = require('gulp-concat');

gulp.task('angular', function() {
    return gulp.src('./node_modules/angular/angular.min.js')
        .pipe(gulp.dest('./public/assets/javascripts/shared'));
});

gulp.task('angular:route', function() {
    return gulp.src('./node_modules/angular-route/angular-route.min.js')
        .pipe(gulp.dest('./public/assets/javascripts/shared'));
});

gulp.task('sass', function() {
    return gulp.src('./assets/stylesheets/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions', '>2%']})]))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
});

gulp.task('js', function() {
    return gulp.src('./assets/javascripts/**/*.js')
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./public/assets/javascripts/'));
});

gulp.task('js:watch', function() {
    gulp.watch('./assets/javascripts/**/*.js', ['js']);
});

gulp.task('run:all', ['sass:watch', 'js:watch']);
