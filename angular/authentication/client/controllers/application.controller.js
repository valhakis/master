class ApplicationController {
   constructor(AuthRoles, AuthService) {
      // console.log(`ApplicationController has been loaded.`);
      this.currentUser = null;
      this.AuthRoles = AuthRoles;
      this.isAuthorized = AuthService.isAuthorized;
   }

   SetCurrentUser(user) {
      this.currentUser = user;
   }

   example() {
      console.log(`ApplicationController: example is working perfectly.`);
   }

   test() {
      console.log(`Test Worked`);
   }
}

export default ApplicationController;
