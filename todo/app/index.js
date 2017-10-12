var express = require('express');
var app = express();

require('./Loc')('todo', function() { 
  var loc = Loc['todo'];

  // SETS UP ALL PARTIALS
  loc.registerPartial('base', 'lay/base');
  loc.registerPartial('navigation', 'inc/navigation');
  loc.registerPartial('footer', 'inc/footer');

  // INCLUDES APPLICATION MIDDLEWARES
  require('./middleware')(app, function() {

    // INITIALIZES VIEW LOCAL VALUES
    app.use(function(req, res, next) {
      res.locals.app = {
        name: 'todo'
      };
      next();
    });

    require('./routes')(app);

  });

});

module.exports = app;
