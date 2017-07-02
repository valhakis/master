var fs = require('fs');
var watch = require('node-watch');
var express = require('express');

var router = express.Router();

router.use('/website1', require('./sites/website01/server'));

// /websites

router.get('/', function(req, res) {
  var source = fs.readFileSync(__dirname + '/views/index.html', 'utf8');
  res.send(source);
});

watch([
  __dirname + '/views'
], function() {
  App.restartBrowserSync();
});

module.exports = router;
