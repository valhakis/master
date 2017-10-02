var path = require('path');
global.App = require('../share/App.js').initialize(path.join(__dirname, '..'));
global.Loc = require('../share/Loc.js');
global.App.path = function(name) {
	return path.join(__dirname, '..') + '/' + name;
};
var env = App.masterRequire('env');

// require('../globals');

var log = console.log;

var port = '4000';
var host = env.host;

var http = require('http');
var request = require('request');
var app = require('./app');

var server = http.createServer(app);
// require('./socket').start(server);

var db = require('./db');

db.sync().then(() => {
  server.listen(port, host, function() {
    log(`Server is listening at ${host}:${port}.`);
    request(`http://${env.host}:${env.bs.port}/__browser_sync__?method=reload`, function(err) {
    	if (err) console.log(JSON.stringify(err));
    });
  });
});
