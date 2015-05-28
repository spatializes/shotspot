var React = require('react');
var $ = require('jquery');
var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var FlatButton = mui.FlatButton;
var AnimalStore = require('../stores/AnimalStore');
var AnimalUtils = require('../utils/AnimalAPIUtils');

var AnimalList = React.createClass({
    render: function() {
        var animalNodes = this.props.animals.map(function (animal) {
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
});


var AnimalBox = React.createClass({
    getInitialState: function() {
      return AnimalStore.getStateFromStores();
    },

    componentDidMount: function() {
      AnimalStore.addChangeListener(this._onChange);
      this.getAnimalDataIfNeeded(this.props);
    },

    componentWillUnmount: function() {
      AnimalStore.removeChangeListener(this.onChange);
    },

    componentWillReceiveProps: function(nextProps) {
      this.getAnimalDataIfNeeded(nextProps);
    },

    getAnimalDataIfNeeded: function(props) {
      AnimalUtils.getAll()
    },

    _onChange: function() {
      this.setState(AnimalStore.getStateFromStores());
    },
    render: function() {
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
});

module.exports = AnimalBox;
