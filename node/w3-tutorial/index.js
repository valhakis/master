var http = require('http');

var host = '192.168.0.2';
var port = '5000';

http.createServer(function(req, res) {
   res.writeHead(200, {
      'Content-Type': 'text/plain'
   });
   res.end('Hello World!');
}).listen(port, host, function() {
   console.log(`SERVER IS RUNNING AT http://${host}:${port}.`);
});
