var express = require('express');
var path = require('path');

var Loc = require('../Loc');
var app = express();

app.use(Loc.static('pub'));
app.use(Loc.static('dist'));

module.exports = app;
