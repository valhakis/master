import HomeController from './home.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home.template.pug')(),
         controller: HomeController,
         controllerAs: 'home'
      });
}
