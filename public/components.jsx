var React = require('react');

var data = [];

var AnimalBox = React.createClass({
    render: function() {
        return (
            <div className="animalBox">
                <h1>box</h1>
                <div>box below here</div>
                <div>box below this too</div>
                <div>box three</div>
                <div>box four</div>
                <div>box five</div>
            </div>
        );
    }
});

React.render(
        <AnimalBox />,
        document.getElementById('content')
);
