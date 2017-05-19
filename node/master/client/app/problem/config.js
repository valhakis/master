export default function config($stateProvider) {
   $stateProvider
      .state('problem', {
         url: '/problem',
         template: require('./template.pug')()
      })
   ;
}
