var User = GET.require('models/user.model');
var bcrypt = require('bcryptjs');

exports.AllUsers = function(req, res) {
   User.find({}, function(err, users) {
      if (err) {
         res.send({
            message: 'I was unable to find users.',
            error: err
         });
      } else if (!users) {
         res.send({
            message: 'I was unable to find users.',
         });
      } else {
         res.send(users);
      }
   });
};

exports.CreateUser = function(req, res) {
   var email = req.body.email;
   var password = req.body.password;
   var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

   var newUser = new User({
      email: email,
      password: hash
   });

   newUser.save(function(err, user) {
      if (err) {
         res.send({
            message: "I was unable to create user.",
            error: err
         });
      } else if (!user) {
         res.send({
            message: "I was unable to create user."
         });
      } else {
         res.send(user);
      }
   });
};
