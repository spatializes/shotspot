'use strict'

import React from 'react';
import mui from 'material-ui';

import AnimalStore from '../stores/AnimalStore';
import AnimalUtils from '../utils/AnimalAPIUtils';

const RaisedButton = mui.RaisedButton;
const FlatButton = mui.FlatButton;

class AnimalList extends React.Component {
    render() {
        const animalNodes = this.props.animals.map(function (animal) {
            return (
                <div>
                    <span><strong>Name:</strong> {animal.name}</span>&nbsp;&nbsp;&nbsp;
                    <span><strong>Location:</strong> {animal.location}</span>
                </div>
            );
        });
        return (
            <div className="animalList">
                {animalNodes}
            </div>
        );
    }
};

class AnimalBox extends React.Component {
  constructor() {
    super();
    this.getAnimalDataIfNeeded = this.getAnimalDataIfNeeded.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = AnimalStore.getStateFromStores();
  }
    
  componentDidMount() {
    AnimalStore.addChangeListener(this._onChange);
    this.getAnimalDataIfNeeded(this.props);
  }

  componentWillUnmount() {
    AnimalStore.removeChangeListener(this.onChange);
  }

  componentWillReceiveProps(nextProps) {
    this.getAnimalDataIfNeeded(nextProps);
  }

  getAnimalDataIfNeeded(props) {
    AnimalUtils.getAll()
  }

  _onChange() {
    this.setState(AnimalStore.getStateFromStores());
  }

  render() {
    return (
      <div className="shot-wrap">
        <h1>Anims</h1>
        <AnimalList animals={this.state.animals} />
        <div>foot</div>
        <RaisedButton label="Default" />
        <FlatButton label="Primary" primary={true} />
      </div>
    );
  }
};

module.exports = AnimalBox;
