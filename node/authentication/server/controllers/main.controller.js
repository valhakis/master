var User = GET.require('models/user.model');

exports.RenderHomeIndex = function(req, res) {

   /* return all users from database. */
   User.find({}, function(err, users) {

      /* render home view. */
      res.render('home/index', {

         /* set users array to be used in view. */
         users: users
      });
   });

};

exports.RedirectToHome = function(req, res) {
   res.redirect('/home');
};
