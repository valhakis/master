export default function config($stateProvider) {
   $stateProvider
      .state('problem', {
         url: '/problem',
         template: require('./template.pug')(),
         redirectTo: 'problem.index',
         controller: require('./controller')
      })
      .state('problem.index', {
         url: '/index',
         template: require('./index/template.pug')()
      })
      .state('problem.create', {
         url: '/create',
         template: require('./create/template.pug')()
      })
      .state('problem.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller'),
         controllerAs: 'vm'
      })
   ;
}
