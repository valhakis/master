var mongoose = require('mongoose');
var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');


var elements = {
  '2017-07-23': express()
};

var start = function(err, app) {
  app.use(function(req, res, next) {
    res.render = function(path, data) {
      var source = fs.readFileSync(App.root(`views/2017-07-23/${path}`), 'utf-8');
      var template = handlebars.compile(source);
      res.end(template(data ? data : {}));
    };
    res.redirectLoc = function(path) {
      this.redirect(`/2017-07-23${path}`);
    };
    next();
  });
  if (err) {
    app.use(function(req, res, next) {
      res.render('error-database.hbs', {
        error: err
      });
    });
    return;
  }
  app.get('/status', function(req, res) {
    res.render('status.hbs');
  });
  app.get('/', function(req, res) {
    var user = {
      name: 'William Valhakis'
    };

    res.render('index.hbs', {
      user: user
    });
  });
  app.post('/login', function(req, res) {
    res.redirectLoc('/');
    console.log(req.body);
  });
};

var connection = mongoose.createConnection('mongodb://192.168.0.10/2017-07-23:27017', function(err) {
  if (err) {
    return start(err, elements['2017-07-23']);
  }
  start(null, elements['2017-07-23']);
});

module.exports = function(app) {
  app.use('/2017-07-18', App.masterRequire('2017-07-18/app'));
  app.use('/bootstrap', App.masterRequire('bootstrap/server').app);
  app.use('/blog', App.masterRequire('blog/server').app);
  app.use('/2017-07-23', elements['2017-07-23']);
};
