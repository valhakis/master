require('../globals');

var request = require('request');
var http = require('http');

var app = require('./app');
var db = require('./db');

var server = http.createServer(app);

db.sequelize.sync().then(function() {
  server.listen(App.port, App.host, function() {
    console.log(`Server is listening at http://${App.host}:${App.port}`);
    App.reload();
  });
});
