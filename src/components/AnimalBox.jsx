var React = require('react');
var $ = require('jquery');
var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var FlatButton = mui.FlatButton;

var AnimalList = React.createClass({
    render: function() {
        var animalNodes = this.props.data.map(function (animal) {
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
        return {data: []};
    },
    loadFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
              this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadFromServer();
    },
    render: function() {
        return (
            <div className="shot-wrap">
                <h1>Anims</h1>
                <AnimalList data={this.state.data} />
                <div>foot</div>
                <RaisedButton label="Default" />
                <FlatButton label="Primary" primary={true} />
            </div>
        );
    }
});

module.exports = AnimalBox;
