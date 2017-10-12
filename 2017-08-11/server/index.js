var path = require('path');
global.App = require('../../share/App').initialize(path.join(__dirname, '..'));
var config = App.require('server/config');

if (process.argv[2]) {
  if (process.argv[2] == 'start') {

    var http = require('http');
    var request = require('request');
    var server = http.createServer(App.require('server/app'));

    server.listen(config.port, config.host, function() {
      request(`http://${config.host}:3000/__browser_sync__?method=reload`);
      console.log(`Server is working at ${config.host}:${config.port}.`);
    });
  }
} else {
  module.exports = {
    host: config.host,
    port: config.port,
  };
}

