var express = require('express');

var app = express();

app.use('/', express.static(App.root('public')));

module.exports = app;
