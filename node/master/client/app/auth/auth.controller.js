export default function AuthController($rootScope, $http, AuthService, AuthEvents, Auth) {
   this.credentials = {
      email: '',
      password: ''
   };

   this.setCurrentUser = (user) => {
      $rootScope.currentUser = user;
   };

   this.login = (credentials) => {
      AuthService.login(credentials)
         .then((user) => {
            $rootScope.$broadcast(AuthEvents.loginSuccess);
            this.setCurrentUser(user);
         }, function() {
            $rootScope.$broadcast(AuthEvents.loginFailed);
         });
   };

   this.login = (credentials) => {
      Auth.login(credentials.email, credentials.password, function(result) {
      });
   };

   this.register = (credentials) => {
      console.log(credentials);
      $http.post('/api/auth/register', credentials)
         .then((res) => {
            console.log(res.data);
         }, (res) => {
            console.log(res.data);
         });
   };
}
