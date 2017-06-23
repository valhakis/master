// App Routes.

var MainController = App.require('controllers/main.controller');

module.exports = function(app) {
   app.get('/', MainController.renderIndex);
};
