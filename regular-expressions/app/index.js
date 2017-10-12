var express = require('express');
var path = require('path');
var request = require('request');
var env = App.masterRequire('env');

var app = express();

var Loc = {
  _root: path.join(__dirname, '..'),
  root: function(name) {
    return this._root + '/' + name;
  }
};

app.use('/', express.static(Loc.root('public')));

module.exports = app;

var re = /ab+c/;

var re = new RegExp('ab+c');

// var string = 'TODAY IS A NEW DAY';

request(`http://${env.host}:${env.bs.port}/__browser_sync__?method=reload`, function(err) {
  if (err) console.log(JSON.stringify(err));
});

// console.log('STRING:', string);
