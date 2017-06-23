export default function W3Routes($stateProvider) {
   $stateProvider
      .state('w3', {
         url: '/w3',
         template: require('./w3.view.pug')()
      });
}
