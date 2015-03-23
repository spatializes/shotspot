/** @jsx React.Dom */

var React = require('react');
var ShotApp = require('./components/ShotApp.jsx');
var $ = require('jquery');
//var mui = require('material-ui');

//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.render(
    <ShotApp />,
    document.getElementById('react-app')
);
