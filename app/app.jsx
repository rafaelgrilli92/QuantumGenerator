var React = require('react');
var ReactDOM = require('react-dom');

// Bootstrap CSS
require("bootstrap/dist/css/bootstrap.css");

// App CSS
require('ApplicationStyles');

var Main = require('Main');

ReactDOM.render(
	<Main />, 
	document.getElementById('app')
);