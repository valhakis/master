var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

require('./config')(app);
require('./middleware')(app);

app.get('/', function(req, res) {
	var source = fs.readFileSync(path.join(__dirname, '../views/index.html'), 'utf-8');
	res.end(source);
  // res.render('index');
});

app.get('/Prism/themes', function(req, res) {
	var data = fs.readdirSync(App.masterRoot('node_modules/prismjs/themes'), 'utf-8')
	res.send(data);
});

module.exports = app;
