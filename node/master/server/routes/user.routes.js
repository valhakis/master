var UserController = GET.require('controllers/user.controller');

module.exports = function(app) {
   app.get('/user/remove/:userId', UserController.RemoveUser);
};
