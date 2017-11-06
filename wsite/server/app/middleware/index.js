var express = require('express');
var bodyParser = require('body-parser');
var env = Loc.require('env');
var app = Loc.require('server/app');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.locals.namespace = env.namespace;
  next();
});

app.use('/', Loc.static('public'));
app.use('/', express.static(env.node_modules_dir));
app.use('/api', Loc.require('server/app/api'));
