// app.get('/dashboard', GET.require('middleware/require-login.middleware'));

module.exports = function(req, res, next) {
   if (!req.user) {
      res.redirect('/login');
   } else {
      next();
   }
};
