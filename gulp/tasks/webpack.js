var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('../config').webpack;
var webpackConfig = require("../../webpack.config.js");

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

