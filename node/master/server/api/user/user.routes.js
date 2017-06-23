var controller = require('./user.controller');

module.exports = function(router) {
   router.get('/users/:userId', controller.singleById);
   router.get('/users', controller.all);
   router.post('/users', controller.create);
   router.delete('/users/:userId', controller.remove);
};
