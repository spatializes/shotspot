var React = require('react');
var AnimalBox = require('./AnimalBox.jsx');

var ShotApp = React.createClass({
  render: function() {
    return (
      <div className="shot-app">
        <AnimalBox url='/animals' />
        hi shots
      </div>
    )
  }
});

module.exports = ShotApp;
