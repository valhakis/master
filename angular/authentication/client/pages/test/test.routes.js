import TestController from './test.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('test', {
         url: '/test',
         template: require('./test.template.pug')(),
         controller: TestController,
         controllerAs: 'test'
      })
      .state('test.index', {
         url: '/index',
         template: require('./views/index.pug')(),
      })
      .state('test.login', {
         url: '/login',
         template: require('./views/login.pug')(),
      })
      .state('test.controller', {
         url: '/controller',
         template: require('./views/controller.pug')(),
      })
   ;
}
