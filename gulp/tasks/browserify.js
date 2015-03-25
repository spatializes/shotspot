var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var config = require('../config').browserify;


//var bundler = watchify(browserify('./src/components.jsx', watchify.args));
var bundler = watchify(browserify('./src/app.js', watchify.args));
bundler.transform(reactify);

gulp.task('browserify', bundle); // run gulp browserify to build
bundler.on('update', bundle); // on any dep update, run bundler
bundler.on('log', gutil.log); // output build log to terminal

function bundle() {
    return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
            .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest(config.dest));
}

