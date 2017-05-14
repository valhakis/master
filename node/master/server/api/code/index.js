var controller = require('./controller');

module.exports = function(router) {
   router.get('/codes', controller.all);
   router.post('/codes', controller.create);
   router.get('/codes/latest', controller.latest);
   router.delete('/codes/:codeId', controller.remove);
};
