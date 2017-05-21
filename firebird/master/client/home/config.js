export default function config($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         template: require('./template.pug')(),
         controller: require('./controller')
      })
   ;
}
