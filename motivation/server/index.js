require('../globals');

var http = require('http');

var request = require('request');
var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(App.path('public')));
app.use('/', express.static(App.master('node_modules')));

app.get('/images', function(req, res) {
  fs.readdir(App.path('public/img'), (err, images) => {
    res.send(images);
  });
});

app.post('/image/upload', function(req, res) {
  var url = req.body.url;
  
  request.head(url, function(err, response, body) {
    if (err) return res.status(500).send(err);
    var filename = App.root('public/img') + '/' + url.split('/').pop();
    // console.log('FILENAME: ', filename);
    request(url).pipe(fs.createWriteStream(filename)).on('close', function() {
      res.send({ message: 'UPLOADED' });
    });
  });

  // console.log(req.body);
  // res.send(req.body);
});

var server = http.createServer(app);

var port = 4000;
var host = '127.0.0.1';
server.listen(port, host, () => {
  console.log(`server at ${host}:${port}`);
  request(`http://127.0.0.1:3000/__browser_sync__?method=reload`);
});
