var MainController = DevAdmin.require('controllers/main.controller');

module.exports = function(app) {
   app.get('/', MainController.renderIndex);
};
