var controller = require('./controller');

module.exports = function(app) {
   app.get('/api/documents', controller.index);
   app.delete('/api/documents/:documentId', controller.remove);
   app.put('/api/documents/:documentId/unremove', controller.unRemove);
};
