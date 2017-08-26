var path = require('path');
var express = require('express');

global.App = require('../../share/App.js').initialize(path.join(__dirname, '..'));

var env = App.masterRequire('env');
var port = process.argv[2];
var host = env.host;

var app = express();

app.get('/', function(req, res) {
	res.send('EVERYTHING IS WORKING FINE');
});

app.listen(port, host, function() {
	console.log(`CURRENT_SERVER HAS STARTED AT: ${host}:${port}.`);
});
