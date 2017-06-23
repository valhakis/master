import angular from 'angular';
export default function AuthService($http, Session) {
   var service = {};

   service.login = (credentials) => {
      return $http.post('/api/auth/login', credentials)
         .then(function(res) {
            Session.create(res.data.sessionId, res.data.user._id, res.data.user.group);
            return res.data.user;
         });
   };

   service.isAuthenticated = function() {
      return !!Session.userId;
   };

   service.isAuthorized = function(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
         authorizedRoles = [authorizedRoles];
      }
      return (service.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
   };

   return service;
}
