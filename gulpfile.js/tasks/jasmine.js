var config = require('../config');
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var watch = require('gulp-watch');

var js = require('./js');

gulp.task('tests', ['build:js'], function() {
  return gulp.src(config.unitTests.entry)
    .pipe( jasmine() );
});

gulp.task('watch:tests', ['build:js'], function() {
  watch(config.js.src, function() { gulp.start('tests') });
});
