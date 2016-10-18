var React = require('react');

var Form = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();

		var length = this.refs.numLength.value;
		var type = this.refs.uint8.checked ? 'uint8' : 'uint16';
		
		if (length !== '' && length !== '0') {
			this.refs.numLength.value = '';
			this.props.onSubmit(length, type);
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label className="radio inline control-label">Choose a type:</label>
					  	<label className="radio-inline">
							<input type="radio" name="type" ref="uint8" defaultChecked /> uint8
						</label>
						<label className="radio-inline">
							<input type="radio" name="type" /> uint16
						</label>
					</div>
					<div className="form-group">
						<input type="number" className="input-lg form-control" ref="numLength" placeholder="What length do you want?" required/>
					</div>
				  	<button type="submit" className="btn btn-lg btn-default btn-block">Generate!</button>
				</form>
			</div>
		)
	}
});

module.exports = Form;