require('../globals');

var valhakis = require('valhakis');
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

app.use(valhakis.middleware);

app.use(function(req, res, next) {
  next();
});

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

app.use('/site', masterRequire('site/server'));
app.use('/notes', masterRequire('notes/server'));
app.use('/canvas', masterRequire('canvas/server'));
app.use('/todo', masterRequire('todo/server'));
app.use('/learnopengl', masterRequire('learnopengl/server'));
app.use('/template_engines', masterRequire('template_engines/server'));
app.use('/example', masterRequire('example/server'));
app.use('/highlighters', masterRequire('highlighters/server'));
app.use('/terminal', masterRequire('terminal/server'));

app.use(express.static(App.masterRoot('node_modules')));
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
