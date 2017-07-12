var watch = require('node-watch');
var path = require('path');
var Loc = App.masterRequire('site/local');

module.exports = function(server, bs) {
  watch([
    Loc.root('extern'),
    Loc.root('server')
  ], { recursive: true }, function() {
    server.restart();
  });
  watch([
    Loc.root('public'),
    Loc.root('views'),
  ], { recursive: true }, function() {
    bs.reload();
  });
};

