var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./db').connect(function(db) {
	app.use(express.static(path.join(__dirname, "../public")));
	app.use('/api', require('./api')(db));
	var Component = db.models.Component;
});

module.exports = app;

/*
	var component = new Component({
		title: 'example component',
		description: 'example components description'
	});
	component.save(function(err) {
		if (err) {
			return console.log(err);
		}
		console.log('meow');
	});
	*/
