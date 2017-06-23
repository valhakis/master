export default function run($rootScope, $state) {
   if (!location.hash) {
      $state.go('home');
   }
   $rootScope.$on('$stateChangeStart', function(event, to, params) {
      if (to.redirectTo) {
         event.preventDefault();
         $state.go(to.redirectTo, params, { location: 'replace' });
      }
   });
}
