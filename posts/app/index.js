var exphbs  = require('express-handlebars');
var express = require('express');

var app = express();

app.set('views', Loc.root('views'));
app.locals.basedir = Loc.root('views');
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs({
  extname: '.hbs', 
  deafultLayout: 'main', 
  layoutsDir: Loc.root('views/layouts'),
  partialsDir: Loc.root('views/partials'),
}));

require('./routes')(app);

module.exports = app;
