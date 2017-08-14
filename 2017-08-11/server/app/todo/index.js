module.exports = function todo(app) {
  app.use('/todo', require('./todo.routes'));
};
