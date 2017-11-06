require('../globals');
var http = require('http');
var env = Loc.require('env');
var request = require('request');

var server = http.createServer(require('./app'));

var env = Loc.require('env');

var port = env.port;
var host = env.host;

server.listen(port, host, function() {
  console.log(`server is listening at http://${host}:${port}. [${process.env.mode}]`);
  if (process.env.mode == 'development') {
    request(`http://${env.host}:${env.bs_port}/__browser_sync__?method=reload`, function(err) {
      if (err) console.log(JSON.stringify(err));
    });
  }
});
