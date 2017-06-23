var express = require('express');
var app = express();

require('./config')(app);
require('./middleware')(app);

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
