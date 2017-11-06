var express = require('express');
var Handlebars = require('handlebars');
var fs = require('fs');

var app = module.exports = express();

require('./config');
require('./middleware');
require('./routes');

app.get(['/', '/index.html', '/index.hbs'], function(req, res) {
  fs.readFile(Loc.root('server/app/views/index.hbs'), function(err, content) {
    if (err) {
      res.send(err);
    } else {
      var template = Handlebars.compile(content.toString());
      console.log(res.locals);
      res.send(template(res.locals));
    }
  });
});
