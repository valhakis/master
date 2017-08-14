var fs = require('fs');

exports.index = function(req, res) {
	var source = fs.readFileSync(App.root('server/app/mysql/index.view.html'), 'utf-8');
	res.end(source);
};

exports['main.js'] = function(req, res) {
	var source = fs.readFileSync(App.root('server/app/mysql/main.js'), 'utf-8');
	res.end(source);
};

exports.task1 = function(req, res) {
	var source = fs.readFileSync(App.root('server/app/mysql/task1.view.html'), 'utf-8');
	res.end(source);
};
