export default function routes($stateProvider) {
   $stateProvider
      .state('login', {
         url: '/login',
         template: require('./login/login.partial.pug')()
      })
      .state('register', {
         url: '/register',
         template: require('./register/register.partial.pug')()
      });
}
