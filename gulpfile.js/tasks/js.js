var config = require('../config');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var babel = require('gulp-babel');

gulp.task('build:js', function() {
    var babelPresets = {
         presets: ['es2015']
    }

    var webpackPresets = {
        output: {
            filename: '[name].js',
        },
    }
    return gulp.src( config.js.src )
        .pipe( webpack( webpackPresets ) )
        .pipe( babel( babelPresets ) )
        .pipe( gulp.dest( config.js.build ) );
});
