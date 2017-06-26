var express = require('express');
var watch = require('node-watch');

// var db = require('./db');

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

watch([__dirname + '/views'], App.restartBrowserSync);

module.exports = router;
