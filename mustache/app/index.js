var express = require('express');
var Mustache = require('mustache');
var AuthController = App.require('server/app/controllers/auth');
var fs = require('fs');

var Loc = require('./Loc');

var app = express();

app.use(AuthController.MID.main);

app.use(function(req, res, next) {
  res.locals.master = "Viktor Vundel";

  next();
});

var partials = {
  footer: Mustache.render(fs.readFileSync(Loc.root('partials/footer.mst'), 'utf-8'))
};

app.get('/home', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/home.mst'), 'utf-8');
  var template = Mustache.render(source, res.locals, partials);
  res.end(template);
});

app.get('/post/create', function(req, res) {
  res.end(Mustache.render(fs.readFileSync(Loc.root('views/post/create.mst'), 'utf-8'), res.locals, partials));
});

app.post('/post/create', function(req, res) {
  res.send(req.body);
});

app.use('/', express.static(Loc.root('public')));

module.exports = app;
