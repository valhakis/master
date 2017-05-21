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
      });
}
