module.exports = function todo_module_routes($stateProvider) {
  var states = [{
    name: 'todo',
    url: '/todo',
    template: require('./todo.template.html'),
    controller: require('./todo.controller'),
  },{
    name: 'todo.home',
    url: '/home',
    template: require('./home/home.template.html'),
    controller: require('./home/home.controller'),
  },{
    name: 'todo.create',
    url: '/create',
    template: require('./create/create.template.html'),
    controller: require('./create/create.controller'),
  }];
  states.forEach(state => {
    $stateProvider.state(state);
  });
};
