// Where to include this file.
// ===========================================================
//
// [server dir]/app.js
//
// app.use(GET.require('app.middleware'));
//

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var csrf = require('csurf');
var session = require('client-sessions');
var config = GET.require('config');

module.exports = function(app) {
   app.use('/bower_components', express.static(GET.root('bower_components')));
   app.use('/public', express.static(GET.server('public')));

   app.use(morgan('combined'));

   // Body Parser is required for req.body.
   // ===========================================================
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   app.use(session({
      cookieName: 'session',
      secret: config.secret,
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
      // httpOnly: true, // don't let browser javascript access cookies.
      // secure: true, // only use cookies over https.
      ephemeral: true, // delete cookie when browser is closed.
   }));

   // CSURF is required for req.csrfToken()
   // ===========================================================
   app.use(csrf());

   app.use(GET.require('middleware/auth.middleware'));
};
