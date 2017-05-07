var User = GET.require('models/user.model');
var bcrypt = require('bcryptjs');

exports.RenderLoginView = function(req, res) {
   res.render('auth/login', {
      csrfToken: req.csrfToken()
   });
};

exports.RenderRegisterView = function(req, res) {
   res.render('auth/register', {
      csrfToken: req.csrfToken()
   });
};

exports.LogUserIn = function(req, res) {
   res.send("I'm just here for testing purposes.");
};

exports.LogUserIn = function(req, res) {
   var email = req.body.email;
   var password = req.body.password;

   User.findOne({
      email: email
   }, function(err, user) {
      if (err) {
         res.send({
            message: `I was unable to find user with an email of ${email}.`,
            error: err
         });
      } else if (!user) {
         /* did not find user with email of [email] */
         res.send({
            message: `I was unable to find user with an email of ${email}.`
         });
      } else {
         /* users password was not valid */
         if (!bcrypt.compareSync(password, user.password)) {
            res.send({
               message: "The password is wrong."
            });
         } else {
            /* users login was valid */

            delete user.password;
            req.session.user = user;

            res.redirect('/dashboard');
            // res.send({
               // message: "I think you are very beautiful."
            // });
         }
      }
   });
};

exports.LogUserOut = function(req, res) {
   req.session.reset();
   res.redirect('/');
};
