export default function run($rootScope, AuthEvents, AuthService) {
   $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.data) {
         var authorizedRoles = next.data.authorizedRoles;
         if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthService.isAuthenticated()) {
               // user is not allowed.
               $rootScope.$broadcast(AuthEvents.notAuthorized);
            } else {
               // user it not logged in.
               $rootScope.$broadcast(AuthEvents.notAuthenticated);
            }

         } 
      }
   });
   $rootScope.$on(AuthEvents.loginSuccess, function() {
      console.log('LOGIN WAS SUCCESSFUL.');
   });
   $rootScope.$on(AuthEvents.loginFailed, function() {
      console.log('LOGIN ATTEMPT FAILED.');
   });
   $rootScope.$on(AuthEvents.sessionTimeout, function() {
      console.log('SESSION HAS BEEN TIMED OUT.');
   });
   $rootScope.$on(AuthEvents.notAuthorized, function() {
      console.log('YOU ARE NOT AUTHORIZED.');
   });
   $rootScope.$on(AuthEvents.notAuthenticated, function() {
      console.log('YOU ARE NOT AUTHENTICATED.');
   });
}
