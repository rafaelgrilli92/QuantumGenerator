var React = require('react');

// ChartJS
var Chart = require("chart.js/dist/Chart.min.js");

var Result = React.createClass({
	dynamicColors: function () {
		var r = Math.floor(Math.random() * 255);
    	var g = Math.floor(Math.random() * 255);
   	 	var b = Math.floor(Math.random() * 255);
    	return "rgba(" + r + "," + g + "," + b + ",0.4)";
	},
	generateColorsArray: function(dataLength) {
		var colorArray = [];
		
		for (var i = 0; i < dataLength; i++) {
			colorArray.push(this.dynamicColors());
		}

		return colorArray;
	},
	generateChart: function(data) {
		var ctx = this.refs.chart;
		var colorsArray = this.generateColorsArray(data.length);

		var myChart = new Chart(ctx, {
		    type: 'bar',
		    maintainAspectRatio: false,
		    options: {
		    	legend: {
		    		display: false
		    	},
		    	tooltips: {
		    		enabled: false
		    	}
			},
		    data: {
		        labels: data,
		        datasets: [{
		            label: '',
		            data: data,
		            borderWidth: 1,
		            backgroundColor: colorsArray
		        }]
		    }
		});
	},
	componentDidMount: function() {
		this.generateChart(this.props.numbers);
	},
	render: function() {
		var {numbers} = this.props;

		return (
			<div className="row" ref="result">
				<div className="col-sm-9">
					<canvas ref="chart" width="400" height="150"></canvas>
				</div>
				<div className="col-sm-3">
					<div className="result-list">
						<table className="table">
							<thead>
								<tr>
									<th>Index</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{
									numbers.map((value, index) => {
										return (
											<tr key={index}>
												<td>{index}</td>
												<td>{value}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Result;