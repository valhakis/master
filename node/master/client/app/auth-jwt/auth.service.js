export default function AuthService($rootScope, $http, $localStorage) {
   var service = {};

   service.login = function(email, password, callback) {
      $http.post('/api/authenticate', { email: email, password: password })
         .then(function(response) {
            if (response.data.token) {
               $localStorage.currentUser = {
                  id: response.data.user._id,
                  email: email,
                  token: response.data.token
               };
               $rootScope.currentUser = $localStorage.currentUser;
               $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
               callback(true);
            } else {
               callback(false);
            }
            console.log(response.data);
         });
   };

   service.logout = function() {
      delete $rootScope.currentUser;
      delete $localStorage.currentUser;
      $http.defaults.headers.common.Authorization = '';
   };

   service.currentUser = function() {
      return $localStorage.currentUser;
   };

   return service;
}
