var path = require("path");
var webpack = require("webpack");
var _ = require('lodash');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;

// common config for use on client (app.js) & server (server.js) bundles
var config = {
  output: {
    path: './build/',
    publicPath: './',
    sourcePrefix: '  '
  },
  
  stats: {
    colors: true,
    reasons: DEBUG
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
 /* 
  externals: {
    'react' : 'React'
  },
 */

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

// Config for client-side bundle (app.js)
// --------------------------------------
var appConfig = _.merge({}, config, {
  entry: './src/app.js',
  output: {
    filename: 'app.js'
  }
});

// Config for server-side bundle (server.js)
// -----------------------------------------
var serverConfig = _.merge({}, config, {
  entry: './server.js',
  output: {
    filename: 'server.js'
  },
  target: 'node',
  externals: /^[a-z\-0-9]+$/,
  node: {
    console: false,
    global: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
});

module.exports = appConfig;
/*
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'webpackBund.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel-loader' 
      }
    ]
  }
};
*/

