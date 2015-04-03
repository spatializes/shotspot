import React from 'react';
import AnimalBox from './AnimalBox.jsx';
import Navbar from './Navbar.jsx';

var ShotApp = React.createClass({
  render: function() {
    return (
      <div className="shot-app">
        <Navbar />
        <AnimalBox url='/animals' />
      </div>
    )
  }
});

module.exports = ShotApp;
