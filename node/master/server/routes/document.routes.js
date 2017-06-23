var DocumentController = GET.require('controllers/document.controller');
module.exports = function(app) {
   // app.get('/documents', DocumentController.findAll);
   app.post('/documents', DocumentController.create);
   app.post('/documents/:documentId/todos', DocumentController.createTodo);
   // app.get('/documents/:documentId', DocumentController.single);
};
