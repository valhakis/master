var express = require('express');
var env = require('../env');

var app = express();

app.use(express.static(env.root + '/public'));

app.listen(env.port, env.host, function() {
  console.log(`server is at ${env.host}:${env.port}.`);
});
