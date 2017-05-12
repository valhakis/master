export default function routes($httpProvider, $stateProvider) {
   $httpProvider.interceptors.push([
      '$injector',
      function($injector) {
         return $injector.get('AuthInterceptor');
      }
   ]);
   $stateProvider
      .state('login', {
         url: '/login',
         template: require('./login/login.view.pug')(),
         controller: 'AuthController',
         controllerAs: 'AuthCtrl'
      })
      .state('register', {
         url: '/register',
         template: require('./register/register.view.pug')(),
         controller: 'AuthController',
         controllerAs: 'AuthCtrl'
      })
      .state('logout', {
         url: '/logout',
         controller: function(Auth) {
            // Auth.logout();
         }
      })
   ;
}
