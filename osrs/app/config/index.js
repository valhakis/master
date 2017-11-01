module.exports = function(app) {
  var exphbs  = require('express-handlebars');
  var slashes = require('slashes');

  var hbs = exphbs.create({
    helpers: require('./helpers'),
    extname: '.hbs', 
    defaultLayout: 'base', 
    layoutsDir: Loc.root('views/lay'),
    partialsDir: Loc.root('views/part'),
  });

  app.set('views', Loc.root('views'));
  app.locals.basedir = Loc.root('views');
  app.set('view engine', '.hbs');
  app.engine('.hbs', hbs.engine);
};
