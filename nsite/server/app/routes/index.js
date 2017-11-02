var app = App.require('server/app');

app.get('/', function(req, res) {
  res.send('welcome');
});
