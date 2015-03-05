/* gulpfile.js */

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var bundler = watchify(browserify('./public/components.jsx', watchify.args));
bundler.transform(reactify);

gulp.task('js', bundle); // run gulp js to build
bundler.on('update', bundle); // on any dep update, run bundler
bundler.on('log', gutil.log); // output build log to terminal

function bundle() {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
            .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./public/'));
}
