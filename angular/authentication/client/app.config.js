export default function config($stateProvider, $httpProvider, $interpolateProvider) {
   $interpolateProvider.startSymbol('{{');
   $interpolateProvider.endSymbol('}}');

   // $rootScope.$on('$stateChangeStart',
      // function(event, toState, toParams, fromState, fromParams){
         // console.log('state change started');
         // if (fromState.name === '' && toState.name !== 'state1'){
            // event.preventDefault();
            // $state.go('state1');
         // }
      // });

   $httpProvider.interceptors.push([
      '$injector',
      function($injector) {
         return $injector.get('AuthInterceptor');
      }
   ]);
}
