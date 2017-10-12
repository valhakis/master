var path = require('path');
var _root = path.join(__dirname, '..', '..');
var express = require('express');
var fs = require('fs');

var hbs = require('handlebars');

var router = express.Router();

var render = function(path, req, res) {
  hbs.registerPartial('base', fs.readFileSync(_root + '/views/lay/' + 'base.hbs'), 'utf-8');
  var source = fs.readFileSync(_root + '/views/' + path, 'utf-8');
  var template = hbs.compile(source);
  res.end(template());
};

router.get('/', function(req, res) {
  Loc['opengl'].render('programs/home.hbs', req, res);
});

router.get('/create', function(req, res) {
  Loc['opengl'].render('programs/create.hbs', req, res);
});

router.post('/create', function(req, res) {
  var errors = [];

  // NAME CAN ONLY BE ONE WORD
  if (!/^\w+$/.test(req.body.name)) {
    errors.push({ target: 'name', message: 'Only one word allowed as name.' });
  } 

  if (errors.length > 0) {
    res.send(errors);
  } else {
    res.send(req.body);
  }
});

module.exports = router;
