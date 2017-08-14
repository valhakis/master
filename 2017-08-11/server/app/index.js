var express = require('express');
var app = express();

App.require('server/app/todo')(app);
App.require('server/app/home')(app);
App.require('server/app/mysql')(app);

module.exports = app;
