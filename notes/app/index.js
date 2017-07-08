var watch = require('node-watch');
var path = require('path');

module.exports = function(server, bs) {
  watch(path.join(__dirname, '../server'), { recursive: true }, function() {
    server.restart();
  });
  watch([
    path.join(__dirname, '../public'),
    path.join(__dirname, '../views'),
  ], { recursive: true }, function() {
    bs.reload();
  });
};

