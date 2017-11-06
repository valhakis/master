var express = require('express');
var app = module.exports = express();

app.use('/', Loc.static('public'));

app.get('/', function(req, res) {
  res.send('THE TYPESCRIPT APP');
});
