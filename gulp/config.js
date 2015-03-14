// gulp configuration

var dest = './build/';
var src = './src';
var mui = './node_modules/material-ui/src';

module.exports = {
    browserify: {
        dest: dest
    },
    less: {
        src: src + '/less/main.less',
        dest: dest
    },
    markup: {
        src: src + "/www/**",
        dest: dest
    }
}
