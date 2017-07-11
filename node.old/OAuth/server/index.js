require('./globals');

var config = GET.require('config');

var app = GET.require('app');

GET.createServer(app, config.host, config.port);

GET.createSecureServer(app, config.host, config['secure-port'], {
   key: GET.base('keys/server-key.pem'),
   cert: GET.base('keys/server-cert.pem')
});
