// default gulp task when 'gulp' is run

var gulp = require('gulp');

gulp.task('default', ['browserify', 'markup', 'less', 'hapi']);
