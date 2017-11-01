var express = require('express');
var passport = require('passport');
var app = express();

require('./config')(app);
require('./middleware')(app);
require('./passport/config')();
require('./routes')(app);

// error handler
app.use(function(req, res, next) {
  res.locals.method = req.method;
  res.locals.path = req.path;
  res.locals.data = {
    url: req.url,
  };
  res.locals.originalUrl = req.originalUrl;
  res.status(404).render('404');
});

module.exports = app;
