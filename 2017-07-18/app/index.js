var Loc = App.masterRequire('2017-07-18/app/Loc');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
  res.send('2017-07-18');
});

module.exports = app;
