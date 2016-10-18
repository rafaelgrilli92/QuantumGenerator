var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./app/app.jsx'
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules', 
			'./app/components',
			'./app/api'
		],
		alias: {
			ApplicationStyles: 'app/styles/app.css'
		},
		extensions: ['','.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			},
			test: /\.jsx?$/,
			exclude: /(node_module|bower_components)/
		}, 
		{
	      test: /\.css$/,
	      loaders: ['style', 'css']
	    }, {
	      test: /\.woff$/,
	      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
	    }, {
	      test: /\.woff2$/,
	      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
	    }, {
	      test: /\.(eot|ttf|svg|gif|png)$/,
	      loader: "file-loader"
	    }]
	},
	devtool: 'inline-source-map'
};
