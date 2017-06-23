class TestController {

   constructor($rootScope, TestAuthService, AuthEvents) {
      console.log(`TestController has been constructed.`);

      this.$rootScope = $rootScope;
      this.AuthService = TestAuthService;
      this.AuthEvents = AuthEvents;

      this.credentials = {
         email: '',
         password: ''
      };
      // console.log(AuthEvents);
   }

   login(credentials) {
      var AuthService = this.AuthService;
      var AuthEvents = this.AuthEvents;
      var $rootScope = this.$rootScope;

      AuthService.login(credentials).then((user) => {
         // console.log(AuthEvents.LOGIN_SUCCESS);
         // $rootScope.$broadcast(AuthEvents.LOGIN_SUCCESS);
         // this.setCurrentUser(user);
      }, function() {
         // console.log(AuthEvents.LOGIN_FAILED);
         // $rootScope.$broadcast(AuthEvents.LOGIN_FAILED);
      });
   }

   setCurrentUser(user) {
      this.currentUser = user;
   }

   example() {
      console.log(`TestController: example() is working perfectly.`);
   }
}

export default TestController;
