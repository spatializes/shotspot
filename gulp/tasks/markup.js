var gulp = require('gulp');
var config = require('../config').markup;

// move www into dest
gulp.task('markup', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
