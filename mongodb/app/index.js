var express = require('express');
var Loc = require('./Loc');
var fs = require('fs');
var Mustache = require('mustache');

var db = require('./db');
var app = express();

app.use('/', express.static(Loc.root('public')));

app.get('/', function(req, res) {
  Loc.render('index', req, res);
});

app.get('/demo', function(req, res) {
  Loc.render('demo', req, res);
});

app.get('/demo/create_db', db.create_db);
app.get('/demo/create_collection', db.create_collection);
app.get('/demo/insert_to_collection', db.insert_to_collection);
app.get('/demo/insert_many_to_collection', db.insert_many_to_collection);
app.get('/demo/insert_with_id', db.insert_with_id);

module.exports = app;
