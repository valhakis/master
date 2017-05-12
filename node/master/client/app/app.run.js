export default function run($rootScope, $state) {
   $rootScope.$on('$stateChangeStart', function(event, to, params) {
      if (to.redirectTo) {
         event.preventDefault();
         $state.go(to.redirectTo, params, { location: 'replace' });
      }
   });
}
