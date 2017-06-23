export default function NavbarDirective() {
   return {
      template: require('./navbar.template.pug')(),
      controller: function($rootScope, $scope, Auth) {
         this.logout = function() {
            Auth.logout();
         };
      },
      controllerAs: 'NavCtrl'
   };
}
