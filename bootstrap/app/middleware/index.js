var app = Loc.require('app');
var serveIndex = require('serve-index');

app.use('/scrap', serveIndex(Loc.root('public/scrap'), {
  hidden: true,
  icons: true,
  view: 'details',
  stylesheet: 'serve-index.css'
}));

app.use(Loc.static('public'));
