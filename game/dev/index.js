var spawn = require('child_process').spawn;
var proxy = require('express-http-proxy');
var env = App.masterRequire('env');
var webpack = require('webpack');

exports.hasStarted = false;

var port = '4020';

exports.start = function(app, callback) {
	var bs = require('browser-sync').create();

	var compiler = webpack(App.masterRequire('game/webpack.config'));

	var watching = compiler.watch({

	}, function(err, stats) {
		console.log(stats.toString({
			chunks: false,
			colors: true
		}));
	});

	if (exports.hasStarted) {
		return callback('GAME HAS ALREADY STARTED');
	};

	bs.init({
		proxy: `${env.host}:4020`,
		open: false
	});

	bs.watch([
		App.masterRoot('game/public/**/*.{html,js,css}'),
	]).on('change', bs.reload);

	spawn('nodemon', ['index.js'], {
		stdio: 'inherit',
		cwd: App.masterRoot('game/server')
	});

	callback(null, 'I HAVE TO START');

	exports.hasStarted = true;
};
