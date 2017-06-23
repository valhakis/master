var csurf = require('csurf');

var CSRFProtection = csurf();

var AuthController = require('../controllers/auth.controller');
var UserController = require('../controllers/user.controller');

module.exports = function(app) {
   app.get('/login', CSRFProtection, AuthController.RenderLoginView);
   app.get('/register', CSRFProtection, AuthController.RenderRegisterView);

   app.post('/register', UserController.CreateUser);
   app.post('/login', AuthController.LogUserIn);
   app.get('/logout', AuthController.LogUserOut);
};
