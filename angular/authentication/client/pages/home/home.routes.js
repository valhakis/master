export default function routes($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home.view.pug')(),
         controller: 'HomeController',
         controllerAs: 'home'
   });
}
