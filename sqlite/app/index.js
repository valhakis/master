var Loc = require('./Loc');
var express = require('express');
var app = express();

app.use(Loc.static('public'));

module.exports = app;
