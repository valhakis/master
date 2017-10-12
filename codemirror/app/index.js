var express = require('express');
var fs = require('fs');

var app = express();

require('./Loc')('codemirror', function() { 
  var loc = Loc['codemirror'];

  // SETS UP ALL PARTIALS
  loc.registerPartial('base', 'lay/base');
  loc.registerPartial('navigation', 'inc/navigation');
  loc.registerPartial('footer', 'inc/footer');

  // INCLUDES APPLICATION MIDDLEWARES
  require('./middleware')(app, function() {

    // INITIALIZES VIEW LOCAL VALUES
    app.use(function(req, res, next) {
      res.locals.app = {
        name: 'codemirror'
      };
      next();
    });

    // RENDERS HOME PAGE
    app.get('/', function(req, res) {
      loc.render('home', req, res);
    });

    // RENDERS THEMES PAGE
    app.get('/themes', function(req, res) {
      loc.render('themes', req, res);
    });

    // SENDS CODEMIRROR THEMES LIST
    app.get('/themes-list', function(req, res) {
      fs.readdir(App.masterRoot('node_modules/codemirror/theme'), function(err, result) {
        if (err) return res.send(err);
        res.send(result);
      });
    });

  });

});

module.exports = app;
