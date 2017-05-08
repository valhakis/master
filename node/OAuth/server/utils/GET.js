var path = require('path');

var http = require('http');
var https = require('https');
var fs = require('fs');

var base = path.join(__dirname, '..');

var GET = {};

GET.base = function(name) {
   return base + '/' + name;
};

GET.require = function(name) {
   return require(base + '/' + name);
};

GET.createServer = function(app, host, port) {
   this.server = http.createServer(app);

   this.listener = this.server.listen(port, host, function() {
      console.log(`[server] ${host}:${port}.`);
   });

   return this;
};

GET.createSecureServer = function(app, host, port, options) {
   this.server = https.createServer({
      key: fs.readFileSync(options.key),
      cert: fs.readFileSync(options.cert),
      passphrase: 'minuparool5'
   }, app);

   this.server.listen(port, host, function() {
      console.log(`[server] ${host}:${port}.`);
   });

   return this;
};

module.exports = GET;
