var express = require('express');
var path = require('path');

var app = express();

Loc.require('config')(app);

app.use('/', express.static(Loc.root('public')));

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
