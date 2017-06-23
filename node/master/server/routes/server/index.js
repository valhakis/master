var ServerController = GET.require('controllers/server.controller');

module.exports = function(app) {
   app.get('/server/routes', ServerController.renderRoutes);
   app.use('/server', ServerController.middleware);
   app.get('/server', ServerController.renderIndex);
   app.get('/server/about', ServerController.renderAbout);
   app.get('/server/document/:documentId', ServerController.renderDocument);
};
