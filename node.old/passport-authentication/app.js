var express = require('express');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/passport-authentication');

var db = mongoose.connection;
var app = express();

GET.require('app.config')(app);
GET.require('app.middleware')(app);
GET.require('routes')(app);

module.exports = app;
