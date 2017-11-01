var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

global.App = require('../../share/App');
global.Loc = require('../../share/Loc');

var app = express();

var example = express();

console.log('PATH', example.mountpath);

var router = require('../app');
app.use(express.static(App.masterRoot('public')));
app.use('/lib', express.static(App.masterRoot('lib')));
app.use(router);

var server = http.createServer(app);

var env = App.masterRequire('env');

server.listen(env.port, env.host, () => {
  console.log(`Server started at ${env.host}:${env.port}.`);
});
