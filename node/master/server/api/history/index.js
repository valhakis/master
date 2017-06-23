var controller = require('./controller');

module.exports = function(app) {
   app.get('/api/histories/:historyId', controller.single);
   app.delete('/api/histories/:historyId', controller.remove);
   app.get('/api/histories', controller.index);
   app.post('/api/histories', controller.create);
   app.post('/api/histories/:historyId/posts', controller.createPost);
   app.post('/api/histories/:historyId/codes', controller.createCode);
   app.delete('/api/histories/:historyId/codes/:codeId', controller.removeCode);
};
