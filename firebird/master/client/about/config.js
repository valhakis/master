export default function config($stateProvider) {
   $stateProvider
      .state('about', {
         url: '/',
         template: require('./template.pug')()
      })
   ;
}
