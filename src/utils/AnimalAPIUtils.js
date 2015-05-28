var request = require('superagent');
var AnimalActions = require('../actions/AnimalActions');

var TIMEOUT = 10000;

function get(url) {
  return request
    .get(url)
    .timeout(TIMEOUT)
}

module.exports = {

  getAll: function() {
    get('/animals')
      .end(function(err, res) {
        AnimalActions.receiveAll(JSON.parse(res.text));
      });
  }

}
