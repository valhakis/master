var express = require('express');

module.exports = function(app) {
   var router = express.Router();

   router.use('/users', require('./user/user.router'));
   router.use('/auth', require('./auth/auth.router'));

   return router;
};
