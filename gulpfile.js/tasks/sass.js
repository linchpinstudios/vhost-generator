var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('build:sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];

    return gulp.src( config.sass.src )
        .pipe( sass().on('error', sass.logError) )
        .pipe( postcss(processors) )
        .pipe( gulp.dest( config.sass.build ) );
});
