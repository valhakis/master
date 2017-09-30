var express = require('express');
var bodyParser = require('body-parser');
// var sessions = require('client-sessions');
var csrf = require('csurf');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var proxy = require('express-http-proxy');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(require('cookie-parser')());

	// app.use(require('express-session')({
	app.use(session({
		secret: 'keyboard dog',
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false
		},
		store: new MongoStore({
			url: 'mongodb://localhost/test-app'
		})
	}));

	/*
	app.use(require('client-sessions')({
		cookieName: 'session',
		secret: 'secret words',
		duration: 30 * 60 * 1000,
		activeDuration: 5 * 60 * 1000,
		// httpOnly: true, // don't let browser javascript access cookie
		// secure: true, // only use this cookie over https
		// ephemeral: true, // delete this cookie when the browser exists
	}));
	*/

	app.use(require('express-flash')());

	app.use('/3d', express.static(App.masterRoot('3d')));
	app.use('/', express.static(App.masterRoot('public')));
	app.use('/', express.static(App.masterRoot('game/public/dist')));

	app.use('/css', App.masterStatic('css'));

	app.use('/2017-08-22', express.static(App.masterRoot('2017-08-22/public')));

	app.use('/todo', express.static(App.masterRoot('todo/public')));
	app.use('/lib', express.static(App.masterRoot('lib')));
	app.use('/', express.static(App.masterRoot('node_modules')));
	app.use('/2017-08-15', express.static(App.masterRoot('2017-08-15')));
	app.use('/2017-08-19', App.masterRequire('2017-08-19/app'));

	app.use('/rest', App.masterRequire('rest/app'));
	app.use('/mongo', App.masterRequire('mongo/app'));
	app.use('/W3', App.masterRequire('W3/app'));
	// app.use('/w3', App.masterRequire('W3/app'));
	app.use('/sqlite', App.masterRequire('sqlite/app'));
	app.use('/current', App.masterRequire('current/app'));
	app.use('/mustache', App.masterRequire('mustache/app'));
	app.use('/2017-09-05', App.masterRequire('2017-09-05/app'));
	app.use('/posts', App.masterRequire('posts/app'));
	app.use('/code', App.masterRequire('code/app'));
	app.use('/opengl', App.masterRequire('opengl/app'));
	app.use('/prism', App.masterRequire('prism/app'));
	app.use('/mongodb', App.masterRequire('mongodb/app'));
	app.use('/node', App.masterRequire('node/app'));
	app.use('/standard', App.masterRequire('standard/app'));
	app.use('/regular-expressions', App.masterRequire('regular-expressions/app'));

	app.get('/todo', function(req, res) {
		res.send("I HAVE TO DO EVERYTHING");
	});
	app.use('/php', proxy('http://192.168.0.3:2000'));
	app.use('/laravel', proxy('http://192.168.0.3:2001'));
  return new Promise(function(resolve) {
    resolve();
  });
};
