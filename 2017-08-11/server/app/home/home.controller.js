var fs = require('fs');
var spawn = require('child_process').spawn;

exports.index = function(req, res) {
  var source = fs.readFileSync(App.root('server/app/home/index.view.html'), 'utf-8');

  res.end(source);
};

exports.run = function(req, res) {
	res.send('APPLICATION RAN');
	spawn('./app', [], {
		stdio: 'inherit',
		cwd: App.root('bin')
	});
};
