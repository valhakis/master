var path = require('path');
var http = require('http');
var express = require('express');

global.App = require('../../share/App.js').initialize(path.join(__dirname, '..'));

App.static = function(location) {
	return express.static(App.root(location));
};

var env = App.masterRequire('env');

var app = express();

var server = http.createServer(app);

app.use(App.static('public'));

var port = '4020';
var host = env.host;

server.listen(port, host, function() {
	console.log(`Server at ${host}:${port}.`);
});
