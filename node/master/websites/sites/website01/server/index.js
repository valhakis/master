var config = App.rootRequire('/websites/sites/website01/config');

var fs = require('fs');
var watch = require('node-watch');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
var root = path.join(__dirname, '..');
var database = require('./database');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/database', require('./apis/database'));
router.use('/data', require('./apis/data'));
router.use('/auth', require('./apis/auth'));

router.get('/', function(req, res) {
  var source = fs.readFileSync(root + '/views/index.html', 'utf8');
  res.end(source);
});

router.use(express.static(root + '/public'));

router.use('*', function(req, res) {
  var source = fs.readFileSync(root + '/views/404.html', 'utf8');
  res.end(source);

  res.status(404).end(source);
});

watch([
  root + '/public',
  root + '/views'
], {recursive: true}, function() {
  App.restartBrowserSync();
});

module.exports = router;
