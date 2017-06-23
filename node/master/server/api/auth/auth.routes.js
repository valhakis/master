var controller = require('./auth.controller');

module.exports = function(router) {
   router.post('/auth/register', controller.register);
   router.post('/auth/login', controller.login);
   router.post('/authenticate', controller.authenticate);
};
