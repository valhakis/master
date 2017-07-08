require('../globals');

var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var fs = require('fs');
var config = App.require('config');

var app = express();

var static = express.static;
var root = App.root;
var masterRoot = App.masterRoot;
var masterRequire = App.masterRequire;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/', static(root('public')));

app.use('/notes', masterRequire('notes/server'));

app.use(function(req, res, next) {
  var source = fs.readFileSync(App.root('views/404.html'), 'utf8');
  res.status(404).end(source);
  next();
});

var port = config.port;
var host = config.host;

app.listen(port, host, function() {
  console.log(`SERVER IS AT ${host}:${port}.`);
  App.reload();
});
