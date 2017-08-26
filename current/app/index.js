var express = require('express');
var app = express();
var Loc = require('../Loc');
var morgan = require('morgan');
var dev = Loc.require('dev');

app.use(morgan('dev'));

app.use(Loc.static('public'));

app.get('/start', function(req, res) {
	dev.start({
		port: req.query.port
	}, function(err, data) {
		if (err) {
			console.log(err);
			res.send(`DEV HAS ALREADY STARTED [zipcode: ${req.query.zipcode}, port: ${req.query.port}]`);
			return;
		}
		if (!err) {
			console.log(data);
			res.send(`I AM THE ONE [zipcode: ${req.query.zipcode}, port: ${req.query.port}]`);
		}
	});
});

app.get('/exit', function(req, res) {
	dev.exit({
		example: 'no data'
	}, function(err, data) {
		if (err) {
			console.log(err);
			return res.send(err);
		} else {
			console.log(data);
			return res.send(data);
		}
	});
});

module.exports = app;
