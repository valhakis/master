var User = GET.require('models/user.model');

module.exports = function(req, res, next) {
   if (req.session && req.session.user) {

      var email = req.session.user.email;

      User.findOne({ email: email }, function(err, user) {
         if (err) {
            throw err;
         } else {
            req.user = user;
            delete req.user.password;
            req.session.user = req.user;
            res.locals.user = req.user;
         }
         next();
      });
   } else {
      console.log(`REQ.SESSION.USER IS NOT SET! [${__filename}]`);
      next();
   }
};
