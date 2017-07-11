var Loc = App.masterRequire('node/local');
var express = require('express');
var server = express.Router();

server.get('/', function(req, res) {
  res.render('server/index.html', {
    example: 'I AM GOD OF THE UNIVERSE'
  });
});

module.exports = server;
