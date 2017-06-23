'use strict';

var User = require(__base + 'database/mongo').User;

exports.getAllUsers = (req, res) => {
   User.find((err, users) => {
      if (err) {
         res.flash('error', 'Unable to find all users');
      }
      res.send(users);
   });
};
