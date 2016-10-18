// Stateless Functional Component
var React = require('react');

// Components
var Form = require('Form');
var Result = require('Result');

// Api
var AnuAPI = require('AnuAPI');

var Main = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			numbers: [],
			errorMessage: undefined
		}
	},
	handleSubmit: function(length, type) {
		var _this = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		AnuAPI.getQuantumNumber(length, type).then(function(res) {
			_this.setState({
				isLoading: false,
				numbers: res.data
			});
		}, function(err) {
			_this.setState({
				isLoading: false,
				errorMessage: err
			});
		});
	},
	render: function() {
		var {isLoading, numbers, errorMessage} = this.state;

		function renderResult() {
			if (isLoading) {
				return <label>Generating numbers...</label>
			} 
			else if (errorMessage != undefined) {
				return <label className="error">{errorMessage.message}</label>
			} 
			else if (numbers && numbers.length == 0) {
				return <label>No numbers to show.</label>
			} 
			else {
				return <Result numbers={numbers} />
			}
		}

		return (
				<div>
					<div className="container">
						<h1 className="text-center">Quantum Generator</h1>
						<div className="central-box">
							<Form onSubmit={this.handleSubmit}/>
						</div>
						<div className="result">
							{renderResult()}
						</div>
					</div>			
				</div>
		)
	}
});

module.exports = Main;