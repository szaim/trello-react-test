var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
	// Card.defaultProps = {
	// 		message : "This is a default message"
	// 	}
	return (

		<div className = "card">
			<div className="card-message">{props.message}</div>
		</div>

	);
};

var trello = ['france', 'Usa', 'mexico', 'colombia']
var cities = ['York', 'New York', 'Baltimore', 'Washington']
var states = ['Virginia', 'Florida', 'New York', 'Washington']


// var List2 = function(props) {
// 	var cards 
// }

var List = React.createClass({
	render: function() {
 		var messages = [];
		for(var i = 0; i <= this.props.cards.length; i++) {
			messages.push(<Card message={this.props.cards[i]} />);	
		};		


		return (
			<div className="list">
			<div className="list-title" titleClass="orange">{this.props.title}</div>

 				{messages}
 			

			</div>				
		);
	}
});
// var title = ['Countries', 'Cities', 'States' ];
var Board = React.createClass({
	getInitialState: function() {
		return {
			titles:['Countries', 'Cities', 'States'],
			lists:[trello, cities, states]
		};
	},
	render: function() {
		var list = [];
		for(var i = 0; i < this.state.lists.length; i++) {
			list.push(<List title={this.state.titles[i]} cards={this.state.lists[i]} />);
		};
		return (
			<div className="board">
	
				{list}
			
			</div>
		);
	}
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
