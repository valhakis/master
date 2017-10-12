var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('I AM DEMO 2 INDEX');
});

module.exports = app;
