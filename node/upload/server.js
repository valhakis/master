process.env.TMPDIR = __dirname + '/tmp';
var http = require('http');
var path = require('path');
var fs = require('fs');
var mu = require('mu2');
var formidable = require('formidable');

var app = function(req, res) {

  switch (req.url) {
    case '/upload':
      var form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
        var oldPath = files.file.path;
        var newPath = __dirname + '/uploads/' + files.file.name;
        fs.rename(oldPath, newPath, function(err) {
          if (err) {
            res.write(JSON.stringify(err));
            res.end();
          } else {
            res.write('File uploaded.');
            res.end();
          }
        });
      });
      break;
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      mu.compileAndRender('index.mu', {}).pipe(res);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'});
      mu.compileAndRender('404.mu', {}).pipe(res);
      break;
  }
};

var server = http.createServer(app);

var host = 'localhost', port = '4000';

server.listen(port, host, function() {
  console.log(`Server at http://${host}:${port}.`);
});
