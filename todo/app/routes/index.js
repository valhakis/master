var loc = Loc['todo'];

var main = loc.require('app/controllers/main');

module.exports = function (app) {

  app.use('/todos', require('./todos'));
  app.use('/posts', require('./posts'));

  app.get('/', main.home);
  app.get('/tables', main.tables);
};
