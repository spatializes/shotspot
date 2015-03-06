var React = require('react');
var $ = require('jquery');

var data = [];

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
            <div className="animalBox">
                <h1>box</h1>
                <div>{this.state.data}</div>
                <div>foot</div>
            </div>
        );
    }
});

React.render(
        <AnimalBox url="/animals" />,
        document.getElementById('content')
);
