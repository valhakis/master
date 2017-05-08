export default function AuthService($http, Session) {
   var authService = {};

   authService.login = function(credentials) {
      return $http.post('/api/auth/login', credentials).then(
         function(res) {
            console.log(res.data);
            return res.data.user;
         },
         function(res) {
            console.log(res.data);
         }
      );
   };

   return authService;
}
