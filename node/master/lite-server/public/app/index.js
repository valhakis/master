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
      .state('todo', {
         url: '/todo',
         templateUrl: '/app/partials/todo/index.html',
         controller: 'TodoController'
      })
      .state('tutorials', {
         url: '/tutorials',
         templateUrl: '/app/partials/tutorial/index.html',
         controller: 'TutorialController'
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
