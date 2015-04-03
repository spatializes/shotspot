/** @jsx React.Dom */

import 'babel/polyfill';
import React from 'react/addons';
import ShotApp from './components/ShotApp.jsx';
import $ from 'jquery';
import mui from 'material-ui';

//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

let element = React.createElement(ShotApp);
React.render(element, document.getElementById('react-app'));
