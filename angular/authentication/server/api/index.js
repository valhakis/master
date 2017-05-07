var express = require('express');

module.exports = function(app) {
   var router = express.Router();

   router.use('/users', require('./user/user.router'));

   return router;
};
