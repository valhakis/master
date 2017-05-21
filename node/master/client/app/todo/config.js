module.exports = function config($stateProvider) {
   $stateProvider
      .state('todo', {
         url: '/todo',
         template: require('./template.pug')(),
         controller: require('./controller'),
         redirectTo: 'todo.index'
      })
      .state('todo.index', {
         url: '/index',
         template: require('./index/template.pug')(),
         controller: require('./index/controller')
      })
      .state('todo.create', {
         url: '/create',
         template: require('./create/template.pug')(),
         controller: require('./create/controller')
      })
      .state('todo.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller')
      })
   ;
};
