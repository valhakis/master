var AuthController = App.require('server/app/controllers/auth');

module.exports = function(app) {
	app.get('/login', AuthController.getRenderLogin);
	app.post('/login', AuthController.postDoLogin);
	app.get('/register', AuthController.renderRegister);
};
