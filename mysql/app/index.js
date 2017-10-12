var express = require('express');
var app = express();

require('./Loc')('mysql', function() { 
  var loc = Loc['mysql'];

  // SETS UP ALL PARTIALS
  loc.registerPartial('base', 'lay/base');
  loc.registerPartial('navigation', 'inc/navigation');
  loc.registerPartial('footer', 'inc/footer');

  // INCLUDES APPLICATION MIDDLEWARES
  require('./middleware')(app, function() {

    // INITIALIZES VIEW LOCAL VALUES
    app.use(function(req, res, next) {
      res.locals.app = {
        name: 'MySQL'
      };
      next();
    });

    require('./routes')(app);

  });

});

module.exports = app;
