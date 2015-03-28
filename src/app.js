/** @jsx React.Dom */

//var React = require('react');
//var ShotApp = require('./components/ShotApp.jsx');

import 'babel/polyfill';
import React from 'react/addons';
import ShotApp from './components/ShotApp.jsx';
import $ from 'jquery';
import mui from 'material-ui';

//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);
console.log(React);

let element = React.createElement(ShotApp);
React.render(element, document.getElementById('react-app'));
