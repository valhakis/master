module.exports = function app_routes($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: `
    <h3>hello world!</h3>
    <hello></hello>
    `
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  $stateProvider.state('example', {
    url: '/example',
    template: require('./pages/example/example.index.html'),
  });
  $stateProvider.state('example.buttons', {
    url: '/buttons',
    template: require('./pages/example/example.buttons.html'),
  });
  $stateProvider.state('example.home', {
    url: '/home',
    template: require('./pages/example/example.home.html'),
  });

  $stateProvider.state('angular', {
    url: '/angular',
    template: require('./pages/angular/angular.html'),
  });
  $stateProvider.state('angular.index', {
    url: '/index',
    template: require('./pages/angular/angular.index.html'),
  });
  $stateProvider.state('angular.try_out_01', {
    url: '/try_out_01',
    template: require('./pages/angular/angular.try_out_01.html'),
  });
  $stateProvider.state('angular.try_out_02', {
    url: '/try_out_02',
    template: require('./pages/angular/angular.try_out_02.html'),
  });
};
