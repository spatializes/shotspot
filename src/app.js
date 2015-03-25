/** @jsx React.Dom */

var React = require('react');
var ShotApp = require('./components/ShotApp.jsx');
//import React from 'react';
//import ShotApp from './components/ShotApp.jsx';
//import $ from 'jquery';
//import mui from 'material-ui';

//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);
console.log(React);

React.render(
  <h1>Hello react</h1>,
  document.getElementById('react-app')
);

React.render(
    <ShotApp />,
    document.getElementById('react-app')
);
