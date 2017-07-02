// apps
var watch = require('node-watch');
var express = require('express');

var router = express.Router();

var root = App.root + '/apps';
var static = express.static;

// /apps
router.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

router.use('/sqlite', require('./sqlite'));
router.use('/music', require('./music'));
router.use('/stack', require('./stack'));
router.use('/bootstrap', static(root + '/bootstrap'));
router.use('/typing', static(root + '/typing'));
router.use('/exercises', static(root + '/exercises'));

// watch([__dirname + '/index.js'], App.restartNodemon);
watch([
  __dirname + '/views',
  root + '/exercises',
  root + '/bootstrap',
  root + '/music/public',
  root + '/typing',
  root + '/stack/public',
], {
  recursive: true,
  filter: function(name) {
    return !/music\/public\/music/.test(name);
  }
}, function(one, two) {
  console.log(one, two);
  App.restartBrowserSync();
});

module.exports = router;
