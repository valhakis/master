export default function run($rootScope, $state, $transitions, AuthEvents, AuthService) {

   // if (window.location.pathname === '/') {
      // $state.go('home');
   // }

   // $rootScope.$on('$stateChangeStart', function(event, next) {
   // var authorizedRoles = next.data.authorizedRoles;
   // if (!AuthService.isAuthorized(authorizedRoles)) {
   // event.preventDefault();
   // if (AuthService.isAuthenticated()) {
   // user is not allowed
   // $rootScope.$broadcast(AuthEvents.NOT_AUTHORIZED);
   // } else {
   // user is not logged in
   // $rootScope.$broadcast(AuthEvents.NOT_AUTHENTICATED);
   // }
   // }
   // });

   // redirect to somewhere
   // ============================================
   // $rootScope.$on('$stateChangeStart', function(event, to, params) {
   // if (to.redirectTo) {
   // event.preventDefault();
   // $state.go(to.redirectTo, params, { location: 'replace' });
   // }
   // });
   // ============================================
}
