var controller = require('./controller');

module.exports = function(app) {
   app.get('/api/documents', controller.index);
};
