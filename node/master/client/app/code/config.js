export default function config($stateProvider) {
   $stateProvider
      .state('code', {
         url: '/code',
         template: require('./template.pug')(),
         redirectTo: 'code.index',
         controller: require('./controller')
      })
      .state('code.index', {
         url: '/index',
         controller: require('./index/controller'),
         template: require('./index/template.pug')()
      })
      .state('code.create', {
         url: '/create',
         controller: require('./create/controller'),
         template: require('./create/template.pug')()
      })
      .state('code.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller'),
         controllerAs: 'vm'
      })
      .state('code.removed', {
         url: '/removed',
         template: require('./removed/template.pug')(),
         controller: require('./removed/controller'),
         controllerAs: 'vm'
      })
      .state('code.edit', {
         url: '/edit/{codeId}',
         template: require('./edit/template.pug')(),
         controller: require('./edit/controller'),
         controllerAs: 'vm',
         resolve: {
            code: function(Code, $transition$) {
               return Code.findById($transition$.params().codeId);
            }
         }
      })
      .state('code.single', {
         url: '/single/{codeId}',
         template: require('./single/template.pug')(),
         controller: require('./single/controller'),
         controllerAs: 'vm',
         resolve: {
            code: function(Code, $transition$) {
               return Code.findById($transition$.params().codeId);
            }
         }
      })
   ;
}
