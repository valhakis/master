// /notes

var path = require('path');
var config = App.require('config');
var express = require('express');
var notes = express.Router();

var Loc = App.masterRequire('notes/Local');

notes.use(Loc.require('server/routes'));

var static = express.static;

notes.use(static(Loc.root('public')));

notes.get('/', function(req, res) {
  res.send('notes');
});

module.exports = notes;
