var MainController = require('../controllers/main.controller');

module.exports = function(app) {
   app.get('/', MainController.RedirectToHome);
   app.get('/home', MainController.RenderHomeIndex);
};
