var exphbs  = require('express-handlebars');
var slashes = require('slashes');

var hbs = exphbs.create({
  helpers: {},
  extname: '.hbs', 
  defaultLayout: 'base', 
  layoutsDir: Loc.root('views/layouts'),
  partialsDir: Loc.root('views/partials'),
});

app.set('views', Loc.root('views'));
app.locals.basedir = Loc.root('views');
app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);
