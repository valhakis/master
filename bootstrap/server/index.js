var Loc = App.masterRequire('bootstrap/Loc');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(Loc.render);
app.use(express.static(Loc.root('public')));

app.get('/', function(req, res) {
  res.render('index.hbs');
});

app.get('/about', function(req, res) {
  res.render('about/index.hbs');
});

module.exports = {
  app: app
};
