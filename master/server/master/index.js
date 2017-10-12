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

master.get('/music', function(req, res) {
	res.render('master/music/index.hbs');
});

master.get('/', function(req, res) {

  Site.allNotes(function(err, notes) {
    if (err) {
    	console.log(err);
    }

    res.render('master/index.html', {
			notes: notes ? notes : []
    });
  });

});

module.exports = master;
