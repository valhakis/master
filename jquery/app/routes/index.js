var app = Loc.require('app');
var common = Loc.require('app/share/common');

app.get('/', function(req, res) {
  common.render('index', req, res);
});
