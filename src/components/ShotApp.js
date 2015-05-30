'use strict';

import React from 'react';
import AnimalBox from './AnimalBox';
import Navbar from './Navbar';

class ShotApp extends React.Component {
  render() {
    return (
      <div className="shot-app">
        <Navbar />
        <AnimalBox url='/animals' />
      </div>
    );
  }
}

module.exports = ShotApp;
