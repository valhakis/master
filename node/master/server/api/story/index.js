var controller = require('./controller');

module.exports = function(app) {
   app.get('/api/stories', controller.findAll);
};
