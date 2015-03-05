/* gulpfile.js */

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./public/components.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/'));
});

