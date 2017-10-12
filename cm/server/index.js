var express = require('express');
var path = require('path');
var env = require('../env');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.listen(env.port, env.host, function() {
  console.log(`server is at ${env.host}:${env.port}.`);
});
