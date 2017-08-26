if (process.argv[2] == 'start') {
	console.log('CURRENT DEV HAS STARTED');
} else {
	var started = false;

	var spawn = require('child_process').spawn;
	var Loc = require('../Loc');

	exports.start = function(data, cb) {
		if (started) return cb('DEV HAS ALREADY STARTED');

		var srv_spawn = spawn('nodemon', ['index.js', data.port], {
			stdio: 'inherit',
			cwd: Loc.root('server')
		});

		cb(null, 'WHAT AM I SUPPOSED TO DO NOW');
		started = true;
	};

	exports.restart = function() {
		console.log('i have to restart the server');
	}

	exports.exit = function(data, cb) {
		console.log('EXIT MUST BE ');
		cb(null, 'I HAVE TO KILL THE SERVER');
	};
}
