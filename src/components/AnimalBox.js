'use strict';

import React from 'react';
import mui from 'material-ui';

import AnimalStore from '../stores/AnimalStore';
import AnimalUtils from '../utils/AnimalAPIUtils';

const RaisedButton = mui.RaisedButton;

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
}

class AnimalBox extends React.Component {
  constructor() {
    super();
    this.getAnimalDataIfNeeded = this.getAnimalDataIfNeeded.bind(this);
    this.createAnimal = this.createAnimal.bind(this);
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

  getAnimalDataIfNeeded() {
    AnimalUtils.getAll();
  }

  createAnimal(evt) {
    evt.preventDefault();
    const text = {
      name: React.findDOMNode(this.refs.aname).value.trim(),
      location: React.findDOMNode(this.refs.location).value.trim()
    };
    if (!text) { return; }

    AnimalUtils.createAnimal(text);

    React.findDOMNode(this.refs.aname).value = '';
    React.findDOMNode(this.refs.location).value = '';
  }

  _onChange() {
    this.setState(AnimalStore.getStateFromStores());
  }

  render() {
    return (
      <div className="shot-wrap">
        <h1>Animals</h1>
        <AnimalList animals={this.state.animals} />
        <br />
        <form className="newAnimalForm" onSubmit={this.createAnimal}>
          <input type="text" placeholder="Name" ref="aname" />
          <input type="text" placeholder="Location" ref="location" />
          <br /><br />
          <RaisedButton label="New Animal" type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

module.exports = AnimalBox;
