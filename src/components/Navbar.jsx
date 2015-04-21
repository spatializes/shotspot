'use strict';

import React from 'react';
import mui from 'material-ui'

var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var DropDownMenu = mui.DropDownMenu;
var FontIcon = mui.FontIcon;

var filterOptions = [
  { payload: '1', text: 'Deer' },
  { payload: '2', text: 'Moose' },
  { payload: '3', text: 'Cow' },
];

var Navbar = React.createClass({
  render: function() {
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems = {filterOptions} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
        </ToolbarGroup>
      </Toolbar>
    );
  }
});

module.exports = Navbar;
