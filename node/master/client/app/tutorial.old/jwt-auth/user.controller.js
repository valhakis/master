export default function UserController(Auth, $rootScope, $localStorage) {
   this.currentUser = Auth.currentUser();

   this.resetUser = () => {
      this.user = {
         email: '',
         password: ''
      };
   };

   this.login = (user) => {
      console.log('Log in', user);
      Auth.login(user.email, user.password, (result) => {
         if (result === true) {
            this.resetUser();
            console.log('Login successful.');
         } else {
            console.log('Username or password is incorrect.');
         }
      });
   };

   this.logout = function() {
      Auth.logout();
   };

   (() => {
      this.resetUser();
   })();
}
