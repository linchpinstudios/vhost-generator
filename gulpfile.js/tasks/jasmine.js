var config = require('../config');
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('runTests', function() {
  return gulp.src(config.unitTests.src)
    .pipe( jasmine());
});
