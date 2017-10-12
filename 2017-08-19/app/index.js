var express = require('express');
var app = express();
var Loc = require('../Loc');

app.use('/', express.static(Loc.root('public')));

module.exports = app;
