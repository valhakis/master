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
      .state('todo.removed', {
         url: '/removed',
         template: require('./removed/template.pug')(),
         controller: require('./removed/controller'),
         controllerAs: 'vm'
      })
      .state('todo.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller')
      })
      .state('todo.single', {
         url: '/single/{todoId}',
         template: require('./single/template.pug')(),
         controller: require('./single/controller'),
         controllerAs: 'vm',
         resolve: {
            todo: function(Todo, $transition$) {
               return Todo.findById($transition$.params().todoId);
            }
         }
      })
   ;
};
