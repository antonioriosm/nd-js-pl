'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename');

gulp.task('styles', () => {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('assets', () => {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'assets']);
