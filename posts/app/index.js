var path = require('path');
var hbs = require('handlebars');
var _root = path.join(__dirname, '..');
var express = require('express');
var fs = require('fs');

var app = express();

var posts = [];

var render = function(path, req, res) {
	var source = fs.readFileSync(_root + '/views/' + path, 'utf-8');
	res.end(hbs.compile(source)(res.locals));
};

app.get('/', function(req, res) {
	res.locals.name = 'William Valhakis';
	render('index.hbs', req, res);
});

app.get('/create', function(req, res) {
	render('create.hbs', req, res);
});

module.exports = app;
