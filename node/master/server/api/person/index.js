var controller = require('./controller');

module.exports = function(app) {
   app.get('/api/persons', controller.findAll);
};
