import AuthController from './auth.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('login', {
         url: '/login',
         template: require('./login/login.partial.pug')(),
         controller: AuthController,
         controllerAs: 'auth'
      })
      .state('register', {
         url: '/register',
         template: require('./register/register.partial.pug')()
      });
}
