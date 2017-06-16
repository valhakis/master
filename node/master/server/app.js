var env = Master.loadJSON('.env');
var express = require('express');
var httpProxy = require('http-proxy');
var app = express();

var proxy = httpProxy.createProxyServer();
app.use('/php-site', function(req, res) {
  var url = `http://${env['php-site'].host}:${env['php-site'].port}`;
  proxy.web(req, res, { target: `http://${env['php-site'].host}:${env['php-site'].port}` });
});

var routes = require('./routes');

require('./app.config')(app);
require('./app.middleware')(app);


require('./sample/routes')(app);

routes(app);

require('./testing')(app);

GET.rootRequire('site')(app);

module.exports = app;
