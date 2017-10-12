var express = require('express');
var proxy = require('http-proxy-middleware');
var eproxy = require('express-http-proxy');

var app = express();

var host = '192.168.0.3';
var port = 7000;

// app.use('/', proxy({ target: 'http://192.168.0.3:7001', changeOrigin: true }));
app.use('/php', eproxy('http://192.168.0.3:7001'));

app.get('/', function(req, res) {
  res.send('NODE SERVER');
});

app.listen(port, host, function() {
  console.log(`NODE-SERVER: ${host}:${port}.`);
});
