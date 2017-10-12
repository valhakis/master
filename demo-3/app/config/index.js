module.exports = function(app) {
  var exphbs  = require('express-handlebars');

  var hbs = exphbs.create({
    helpers: {
      JSON: function(input) {
        return JSON.stringify(input, ' ', 2);
      },
      url: function(input) {
        return '/demo-3' + input;
      },
      concat: function(path) {
        var arg = Array.prototype.slice.call(arguments, 0);
        arg.pop();
        return arg.join('');
      }
    },
    extname: '.hbs', 
    defaultLayout: 'base', 
    layoutsDir: Loc.root('views/layouts'),
    partialsDir: Loc.root('views/partials'),
  });

  app.set('views', Loc.root('views'));
  app.locals.basedir = Loc.root('views');
  app.set('view engine', '.hbs');
  app.engine('.hbs', hbs.engine);
};

