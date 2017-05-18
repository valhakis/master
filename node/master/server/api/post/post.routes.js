var controller = require('./post.controller');

module.exports = function(router) {
   router.get('/posts', controller.all);
   router.post('/posts', controller.create);
   router.delete('/posts/:postId', controller.remove);
};
