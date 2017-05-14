angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: '/app/partials/home.html'
      })
      .state('about', {
         url: '/about',
         templateUrl: '/app/partials/about.html',
         controller: 'AboutController'
      })
      .state('dashboard', {
         url: '/dashboard',
         templateUrl: '/app/partials/dashboard/index.html'
      });
});

angular.module('app').run(function($state) {
   if (!window.location.hash) 
      $state.go('home');
});
