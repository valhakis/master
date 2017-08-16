var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Loc = require('../Loc');

module.exports = {
	context: __dirname,
	devtool: 'eval-source-map',
	entry: {
		'client': Loc.root('client/index.js'),
		'vendor': ['angular', '@uirouter/angularjs']
	},
	output: {
		path: Loc.root('dist'),
		filename: "[name].out.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }, 
			{ test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader", query: { presets: ['es2015'] } },
			{ test: /\.scss/,    loader: "style-loader!css-loader!sass-loader" },
			{ test: /\.json$/,   loader: "json-loader" },
			{ test: /\.html/,    loader: "html-loader" },
			{ test: /\.coffee$/, loader: "coffee-loader" },
			{ test: /\.pug/,     loader: "pug-loader" },
			{ test: /\.css$/,    loader: "style-loader!css-loader" },
			{ test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
			{ test: /\.jade$/,   loader: "jade-loader?self" },
			{ test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // Specify the common bundle's name.
		})
		/*
		new BrowserSyncPlugin({
			host: '192.168.0.2',
			port: '3000',
			server: {
				baseDir: ['dist']
			}
		}),
		new HtmlWebpackPlugin({
			chunks: ['client'],
			template: './client/index.html',
			favicon: './client/favicon.ico',
			filename: './index.html'
		}),
		*/
	]
};
