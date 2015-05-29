'use strict'

import React from 'react';
import mui from 'material-ui'

const Toolbar = mui.Toolbar;
const ToolbarGroup = mui.ToolbarGroup;
const DropDownMenu = mui.DropDownMenu;
const FontIcon = mui.FontIcon;

const filterOptions = [
  { payload: '1', text: 'Deer' },
  { payload: '2', text: 'Moose' },
  { payload: '3', text: 'Cow' },
  { payload: '4', text: 'Elephant' },
];

class Navbar extends React.Component {
  render() {
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
};

module.exports = Navbar;
