var express = require('express');
var httpProxy = require('http-proxy');
var app = express();

var proxy = httpProxy.createProxyServer();
app.use('/php-site', function(req, res) {
   proxy.web(req, res, { target: 'http://192.168.0.2:4500' });
});

var routes = require('./routes');

require('./app.config')(app);
require('./app.middleware')(app);

routes(app);

require('./testing')(app);

module.exports = app;
