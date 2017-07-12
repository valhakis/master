var Site = App.masterRequire('site/extern');

var express = require('express');
var fs = require('fs');
var handlebars = require('handlebars');

var master = express.Router();

master.use(function(req, res, next) {

  res.render = function(path, data) {
    var source = fs.readFileSync(App.root(`views/${path}`), 'utf-8');
    var template = handlebars.compile(source);

    if (!data) {
      data = {};
    }

    res.end(template(data));
  };

  next();
});

master.get('/', function(req, res) {

  Site.allNotes(function(err, notes) {
    if (err) {
      return res.send(err);
    }

    res.render('master/index.html', {
      notes: notes
    });
  });

});

module.exports = master;
