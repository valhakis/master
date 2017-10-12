var webpack = require('webpack');
var express = require('express');
var fs = require('fs');

var started = false;

const app = express();

app.get('/start', function(req, res) {
	if (started) return res.send({
		message: 'WEBPACK HAS ALREADY STARETED',
		started: started
	});
	started = true;
	const compiler = webpack(require('./webpack.config'));
	const watching = compiler.watch({

	}, (err, stats) => {
		console.log(stats.toString({
			chunks: false,
			colors: true
		}));
	});
	res.send({
		message: 'I AM TRYING TO START WEBPACK',
		started: started
	});
});


module.exports = app;
