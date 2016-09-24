var config = require('../config');
var gulp = require('gulp');
var watch = require('gulp-watch');

var apiGulp = require('./api');
var jadeGulp = require('./jade');
var jsGulp = require('./js');
var sassGulp = require('./watch');

gulp.task('watch', function() {
    watch(config.api.src, function() { gulp.start('build:api') });
    watch(config.sass.src, function() { gulp.start('build:sass') });
    watch(config.js.src, function() { gulp.start('build:js') });
    watch(config.jade.src, function() { gulp.start('build:jade') });
});
