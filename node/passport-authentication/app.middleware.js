var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

module.exports = function(app) {
   app.use('/bower_components', express.static(GET.root('bower_components')));
   app.use('/static', express.static(GET.base('static')));

   app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: false, publicPath: webpackConfig.output.publicPath
   }));
   app.use(require('webpack-hot-middleware')(compiler));

   app.use(express.static(path.join(__dirname, 'public')));

   app.use(cookieParser());

   app.use(session({
      secret: 'secret',
      saveUninitialized: true,
      resave: true
   }));

   app.use(passport.initialize());
   app.use(passport.session());

   app.use(expressValidator({
      errorFormatter: function(params, msg, value) {
         var namespace = params.split('.');
         var root = namespace.shift();
         var formParams = root;

         while (namespace.length) {
            formParams += '[' + namespace.shift()+ ']';
         }

         return {
            param: formParams,
            msg: msg,
            value: value
         };
      }
   }));

   app.use(flash());

   app.use(function(req, res, next) {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
   });

};
