class AuthController {
   constructor($rootScope, AuthService, AuthEvents) {
      console.log(`AuthController has been constructed.`);

      this.AuthService = AuthService;
      this.$rootScope = $rootScope;
      this.AuthEvents = AuthEvents;

      this.credentials = {
         email: '',
         password: ''
      };
   }

   login(credentials) {
      console.log(`Login form has been submited.`, credentials);
      this.AuthService.login(credentials).then((user) => {
         this.$rootScope.$broadcast(this.AuthEvents.LOGIN_SUCCESS);
         this.SetCurrentUser(user);
      }, () => {
         this.$rootScope.$broadcast(this.AuthEvents.LOGIN_FAILED);
      });
   }

   SetCurrentUser(user) {
      this.currentUser = user;
   }
}

export default AuthController;
