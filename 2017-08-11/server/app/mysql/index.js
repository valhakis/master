module.exports = function mysql(app) {
	app.use('/mysql', require('./mysql.routes.js'));
};
