export default function AuthInterceptor($rootScope, $q, AuthEvents) {
   return {
      responseError: function(response) {
         $rootScope.$broadcast({
            401: AuthEvents.NOT_AUTHENTICATED,
            403: AuthEvents.NOT_AUTHORIZED,
            419: AuthEvents.SESSION_TIMEOUT,
            440: AuthEvents.SESSION_TIMEOUT,
         }[response.status], response);
         return $q.reject(response);
      }
   };
}
