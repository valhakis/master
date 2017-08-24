var express = require('express');
module.exports = function(app) {
	app.use('/3d', express.static(App.masterRoot('3d')));

	app.use('/2017-08-22', express.static(App.masterRoot('2017-08-22/public')));

	app.use('/todo', express.static(App.masterRoot('todo/public')));
	app.use('/lib', express.static(App.masterRoot('lib')));
	app.use('/', express.static(App.masterRoot('node_modules')));
	app.use('/2017-08-15', express.static(App.masterRoot('2017-08-15')));
	app.use('/2017-08-19', App.masterRequire('2017-08-19/app'));

	app.use('/rest', App.masterRequire('rest/app'));
	app.use('/mongo', App.masterRequire('mongo/app'));
	app.use('/W3', App.masterRequire('W3/app'));

	app.get('/todo', function(req, res) {
		res.send("I HAVE TO DO EVERYTHING");
	});
};
