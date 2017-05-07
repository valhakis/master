import TestController from './test.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('test', {
         url: '/test',
         template: require('./test.template.pug')(),
         controller: TestController,
         controllerAs: 'test'
   });
}
