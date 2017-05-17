var controller = require('./controller');

module.exports = function(router) {
   router.get('/tutorials', controller.findAll);
   router.post('/tutorials', controller.create);
   router.delete('/tutorials/:tutorialId', controller.remove);
};
