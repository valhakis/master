var User = GET.require('models/user.model');

exports.RenderDashboardIndexView = function(req, res) {
   if (req.session && req.session.user) {

      var email = req.session.user.email;

      /* find user from database where email equals session [user.email]. */
      User.findOne({ email: email }, function(err, user) {
         if (err) {
            res.send({
               message: `ERROR: I was unable to find user from database.`,
               error: err
            });
         } else if (!user) {
            req.session.reset();
            res.send({
               message: `ERROR: I was unable to find user with an email of ${email} from database.`,
            });
         } else {
            res.locals.user = user;
            res.render('dashboard/index');
         }
      });
      // res.send(req.session.user);
   } else {
      /* */
      res.redirect('/login');
   }
};

exports.RenderDashboardIndexView = function(req, res) {
   res.render('dashboard/index');
};
