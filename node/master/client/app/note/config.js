module.exports = function config($stateProvider) {
   $stateProvider
      .state('note', {
         url: '/note',
         template: require('./template.pug')(),
         controller: require('./controller'),
         redirectTo: 'note.index'
      })
      .state('note.index', {
         url: '/index',
         template: require('./index/template.pug')(),
         controller: require('./index/controller'),
         controllerAs: 'vm'
      })
      .state('note.create', {
         url: '/create',
         template: require('./create/template.pug')(),
         controller: require('./create/controller'),
         controllerAs: 'vm'
      })
      .state('note.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller'),
         controllerAs: 'vm'
      })
      .state('note.removed', {
         url: '/removed',
         template: require('./removed/template.pug')(),
         controller: require('./removed/controller'),
         controllerAs: 'vm'
      })
   ;
};
