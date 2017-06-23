require('./globals');

var https = require('https');
var fs = require('fs');
var app = require('./app');
var config = GET.require('config');

var server = https.createServer({
   key: fs.readFileSync(GET.base('keys/server-key.pem')),
   cert: fs.readFileSync(GET.base('keys/server-cert.pem')),
   passphrase: 'secret'
}, app);

var port = config.environment.development.port;
var host = config.environment.development.host;

server.listen(port, host, function() {
   console.log(`Server started at ${host}:${port}.`);
});

