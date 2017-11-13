var express = require('express');
var serveIndex = require('serve-index');
var app = module.exports = express();

var common = Loc.require('common');

app.use(Loc.static('public'));

app.get('/', function(req, res) {
  common.render('index', req, res);
});

app.use('/scrap', serveIndex(Loc.root('scrap'), {
  hidden: true,
  icons: true,
  view: 'details',
  stylesheet: 'serve-index.css'
}));
app.use('/scrap', Loc.static('scrap'));
