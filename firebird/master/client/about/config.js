export default function config($stateProvider) {
   $stateProvider
      .state('about', {
         url: '/about',
         template: require('./template.pug')()
      })
   ;
}
