var express = require('express');
var app = express();

// CREATES Loc['demo']
require('./Loc')('angular', function() { 
  var loc = Loc['angular'];

  // SETS UP ALL PARTIALS
  loc.registerPartial('layout', 'lay/base');
  loc.registerPartial('navigation', 'inc/navigation');
  loc.registerPartial('footer', 'inc/footer');

  // INCLUDES APPLICATION MIDDLEWARES
  require('./middleware')(app, function() {

    // INITIALIZES VIEW LOCAL VALUES
    app.use(function(req, res, next) {
      res.locals.app = {
        name: 'Angular'
      };
      next();
    });

    app.get('/', function(req, res) {
      loc.render('home', req, res);
    });

  });

});

module.exports = app;
