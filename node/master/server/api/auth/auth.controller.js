var User = GET.require('models/user.model');
var bcrypt = require('bcryptjs');

exports.register = function(req, res) {
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
   User.create(req.body, function(err, user) {
      if (err)
         res.status(400).send(err);
      else
         res.status(200).send(user);
   });
};

exports.login = function(req, res) {
   User.findOne({ email: req.body.email }, function(err, user) {
      if (err)
         res.status(400).send(err);
      else if (!user)
         res.status(400).send({ 'message': 'User object is empty.' });
      else if (!bcrypt.compareSync(req.body.password, user.password)) {
         res.status(400).send({ 'message': 'Wrong password.' });
      } else {
         res.status(200).send({
            sessionId: req.session.id,
            message: 'I think login was success.',
            user: user
         });
      }

   });
};

exports.authenticate = function(req, res) {
   User.findOne({
      email: req.body.email
   }, function(err, user) {
      if (err) {
         res.status(200).send({
            error: err,
            message: `I don't know what happened.`
         });
      } else if (!user) {
         res.status(200).send({
            message: 'I was unable to find user with this email.'
         });
      } else if (!bcrypt.compareSync(req.body.password, user.password)) {
         res.status(200).send({
            message: 'Email or password was incorrect.'
         });
      } else {
         res.status(200).send({
            message: 'Authentication was successful.',
            token: 'example-token',
            user: user
         });
      }
   });
};
