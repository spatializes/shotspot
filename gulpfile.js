var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('./config');
var webpackConfig = require("./webpack.config");
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var myConfig = Object.create(webpackConfig);

gulp.task('webpack', function(callback) {
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('less', function() {
    return gulp.src(config.less.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.less.dest));
});

gulp.task('markup', function() {
    return gulp.src(config.markup.src)
        .pipe(gulp.dest(config.markup.dest));
});

gulp.task('default', ['webpack', 'markup', 'less']);
