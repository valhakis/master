var http = require('http');
var fs = require('fs');
var browserify = require('browserify');
var db = require('level')('./db');
var template = require('lodash').template(fs.readFileSync('index.html', 'utf8'));
var sanitize = require('sanitize-html');

var server = http.createServer(function(req, res) {
  res.setHeader('Content-Security-Policy', `script-src 'self' https://maps.googleapis.com https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://maps.googleapis.com https://fonts.googleapis.com; object-src 'self'`);
  switch (req.url) {
    case '/index.js':
      /* browserify our script and return it */
      browserify('index.js').bundle().pipe(res);
      break;
    case '/index.css':
      /* return the file */
      fs.createReadStream('index.css').pipe(res);
      break;
    case '/addcomment':
      /* put comment into database */
      var comment = [];
      req.on('data', function(data) {
        comment.push(data);
      });
      req.on('end', function() {
        // comment = sanitize(comment.join(''));
        comment = comment.join('');
        db.put(Date.now(), comment, function() {
          res.end();
        });
      });
      break;
    default:
      /* grab comments and feed to our template */
      var comments = [];
      db.createReadStream().on('data', function(data) {
        comments.push(data.value);
      }).on('end', function() {
        res.end(template({comments: comments}));
      });
      break;
  }
});

var host = 'localhost';
var port = '4000';

server.listen(port, host, function() {
  console.log(`Server is running at http://${host}:${port}.`);
});
