export default function AuthService($http, Session) {
   var AuthService = {};

   AuthService.login = function(credentials) {
      return $http.post('/api/auth/login', credentials).then(function(res) {

         var sessionId = res.data.sessionId;
         var userId = res.data.user._id;
         var userRole = res.data.user.role[0];

         console.log(res.data);
         console.log(sessionId, userId, userRole);

         Session.create(sessionId, userId, userRole);
         return res.data.user;
      }, function(res) {
         console.log(res.data);
      });
   };

   AuthService.isAuthenticated = function() {
      return !!Session.userId;
   };

   AuthService.isAuthorized = function(AuthorizedRoles) {
      if (!angular.isArray(AuthorizedRoles)) {
         AuthorizedRoles = [AuthorizedRoles];
      }
      return (AuthService.isAuthenticated() && AuthorizedRoles.indexOf(Session.userRole) !== -1) ;
   };

   return AuthService;
}
