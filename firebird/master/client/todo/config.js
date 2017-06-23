export default function config($stateProvider) {
   $stateProvider
      .state('todo', {
         url: '/todo',
         template: require('./template.pug')(),
         controller: require('./controller')
      })
   ;
}
