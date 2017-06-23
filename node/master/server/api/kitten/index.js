module.exports = function(router) {
   var controller = require('./kitten.controller');
   router.get('/kittens', controller.all);
   router.post('/kittens', controller.create);
   router.delete('/kittens/:kittenId', controller.remove);
};
