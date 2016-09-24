var config = require('../config');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task( 'build:api', function() {
    var babelPresets = {
         presets: ['es2015']
    }

    return gulp.src( config.api.src )
        .pipe( babel(babelPresets) )
        .pipe( gulp.dest( config.api.build ) );
});
