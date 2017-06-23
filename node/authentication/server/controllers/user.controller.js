var User = GET.require('models/user.model');

var bcrypt = require('bcryptjs');

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
            message: 'Registration was not successful.',
            error: err
         });
      } else {
         res.send({
            message: 'Registration was successful.'
         });
      }
   });
};

exports.RemoveUser = function(req, res) {
   var id = req.params.userId;
   User.remove({
      _id: id
   }, function(err, user) {
      if (err) {
         res.send({
            message: "I was unable to remove the user.",
            error: err
         });
      } else {
         res.send({
            message: `User with an id of ${id} has been removed.`
         });
      }
   });
};
