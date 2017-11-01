var MainController = Loc.require('app/controllers/main');
var express = require('express');

var app = express();

app.get('/', MainController.index);

module.exports = app;
