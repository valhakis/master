var exphbs  = require('express-handlebars');
var express = require('express');

var app = express();

var hbs = exphbs.create({
  helpers: {
    JSON: function(input) {
      return JSON.stringify(input, ' ', 2);
    }
  },
  extname: '.hbs', 
  deafultLayout: 'main', 
  layoutsDir: Loc.root('views/layouts'),
  partialsDir: Loc.root('views/partials'),
});

app.set('views', Loc.root('views'));
app.locals.basedir = Loc.root('views');
app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);

app.use(Loc.static('public'));

require('./routes')(app);

module.exports = app;
