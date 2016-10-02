var config = require('../config');
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('build:jade', function() {
    console.log(config.jade.build);
    return gulp.src( config.jade.src )
        .pipe( jade().on('error', jade.logError) )
        .pipe( gulp.dest(config.jade.build) );
});
