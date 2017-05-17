'use strict';
var express = require('express');
var path    = require('path');

var config = {
  'views': path.join(__dirname, 'views')
};

var app = express();

app.set('view engine', 'pug');
app.set('views', config.views);

app.get('/', function(req, res){
  res.render('home', {
    title: 'The Home',
    message: 'The Home message'
  });
});

module.exports = app;

