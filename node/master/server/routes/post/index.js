var PostController = GET.require('controllers/post.controller');

module.exports = function(app) {
   app.get('/posts', PostController.renderIndex);
   app.get('/posts/new', PostController.renderNew);
   app.get('/posts/list', PostController.renderList);
   app.post('/posts/create', PostController.create);
};
