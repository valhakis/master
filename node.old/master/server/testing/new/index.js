var controller = require('./controller');

module.exports = function(app) {
   app.get('/testing/new', controller.index);
};
