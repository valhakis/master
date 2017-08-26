var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use('/3d', express.static(App.masterRoot('3d')));

	app.use('/todo', express.static(App.masterRoot('todo/public')));
	app.use('/lib', express.static(App.masterRoot('lib')));
	app.use('/', express.static(App.masterRoot('node_modules')));
	app.use('/2017-08-15', express.static(App.masterRoot('2017-08-15')));

	app.use('/rest', App.masterRequire('rest/app'));
	app.use('/mongo', App.masterRequire('mongo/app'));
	app.use('/w3', App.masterRequire('W3/app'));
	app.use('/sqlite', App.masterRequire('sqlite/app'));
	app.use('/current', App.masterRequire('current/app'));

	app.get('/todo', function(req, res) {
		res.send("I HAVE TO DO EVERYTHING");
	});

	return new Promise(function(resolve) {
		resolve();
	});
};
