export default function UserController($rootScope, $http, Session, AuthService, AuthEvents, UserRoles) {
   this.currentUser = null;
   this.userRoles = UserRoles;
   this.isAuthenticated = () => {
      return !!Session.userId;
   };
   this.isAuthorized = (authorizedRoles) => {
      if (Session.userRole) {
         console.log('Role: ', Session.userRole);
         console.log('Authenticated:', this.isAuthenticated());
         console.log('Authorized Roles:', authorizedRoles);
      }
      if (!angular.isArray(authorizedRoles)) {
         authorizedRoles = [authorizedRoles];
      }
      return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
   };
   this.user = {};
   this.users = [];

   this.register = (user) => {
      $http.post('/api/auth/register', user)
         .then((res) => {
            console.log(res.data);
         }, (res) => {
            console.log(res.data);
         });
   };

   this.setCurrentUser = (user) => {
      this.currentUser = user;
   };

   this.login = (user) => {
      $http.post('/api/auth/login', user)
         .then((res) => {
            Session.create(res.data.sessionId, res.data.user._id, res.data.user.group);
            $rootScope.$broadcast(AuthEvents.loginSuccess);
            this.setCurrentUser(res.data.user);
            // console.log(res.data);
         }, (res) => {
            $rootScope.$broadcast(AuthEvents.loginFailed);
            console.log(res.data);
         });
   };

   this.resetUser = () => {
      this.user = {
         email: '',
         password: '',
         password2: ''
      };
   };

   (() => {
      this.resetUser();
      $http.get('/api/users')
         .then((res) => {
            this.users = res.data;
         }, (res) => {
            console.log(res.data);
         });
   })();
}
