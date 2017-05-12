export default function AuthInterceptor($rootScope, $q, AuthEvents) {
   return {
      responseError: function(response) {
         $rootScope.$broadcast({
            401: AuthEvents.notAuthenticated,
            403: AuthEvents.notAuthorized,
            419: AuthEvents.sessionTimeout,
            440: AuthEvents.sessionTimeout
         }[response.status], response);
         return $q.reject(response);
      }
   };
}
