var User = GET.require('models/user.model');

exports.LogUserIn = function(req, res) {
   var email = req.body.email;
   var password = req.body.password;

   User.findOne({
      email: email
   }, function(err, user) {
      if (err) {
         res.status(500).send({
            message: `I was unable to find user with email of ${email}.`,
            error: err
         });
      } else if (!user) {
         res.status(500).send({
            message: `I was unable to find user with email of ${email}.`,
         });
      } else {
         console.log(req.session, req);
         res.status(200).send({
            sessionId: req.session.id,
            user: user
         });
      }
   });
};
