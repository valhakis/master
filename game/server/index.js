var path = require('path');
var http = require('http');
var express = require('express');
var request = require('request');

global.App = require('../../share/App.js').initialize(path.join(__dirname, '..'));

App.static = function(location) {
  return express.static(App.root(location));
};

var env = App.masterRequire('env');

var app = express();

var server = http.createServer(app);

app.use(App.static('public'));
app.use(App.static('public/dist'));

app.get('/date', function(req, res) {
  res.send(new Date().toUTCString());
});

var port = '4020';
var host = env.host;

server.listen(port, host, function() {
  console.log(`Server at ${host}:${port}.`);
  request(`http://${env.host}:${env.bs.port}/__browser_sync__?method=reload`, function(err) {
    if (err) console.log(JSON.stringify(err));
  });
});
