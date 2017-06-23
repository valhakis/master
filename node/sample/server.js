// SERVER IP: 192.168.0.2
var spawn = require('child_process').spawn;
var http = require('http');
var httpProxy = require('http-proxy');
var express = require('express');
var proxy = httpProxy.createProxyServer();

// php -S 192.168.0.2:2001 -t public
spawn('php', ['-S', '192.168.0.2:2001', '-t', 'public'], {
   stdio: 'inherit',
   cwd: __dirname
});

var app = express();

app.use('/sample', function(req, res, next) {
   proxy.web(req, res, { target: 'http://192.168.0.2:2001' });
});

var server = http.createServer(app);

server.listen(2000, '192.168.0.2');
