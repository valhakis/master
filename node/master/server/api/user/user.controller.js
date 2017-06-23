var User = GET.require('models/user.model');
var bcrypt = require('bcryptjs');

exports.all = function(req, res) {
   User.find({}, function(err, users) {
      if (err) 
         res.status(400).send(err);
      else
         res.status(200).send(users);
   });
};

exports.create = function(req, res)  {
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
   User.create(req.body, function(err, user) {
      if (err) {
         res.status(200).send(err);
      } else {
         res.status(200).send(user);
      }
   });
};

exports.remove = function(req, res) {
   User.remove( {_id: req.params.userId}, function(err, user) {
      if (err) 
         res.send(err);
      else
         res.send(user);
   } );
};

exports.singleById = function(req, res) {
   User.findById(req.params.userId, function(err, user) {
      if (err) return res.send(err);
      res.send(user);
   });
};
