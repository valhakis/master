import angular from 'angular';
import directives from './directives';
import PostController from './controllers/post.controller';

var AppModule = angular.module('app', [ directives ]);

AppModule.controller('PostController', PostController);

AppModule.constant('CONSTANTS', {
  API: '/opengl/api'
});

AppModule.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('<%').endSymbol('%>');
});

AppModule.run(function($rootScope) {
  $rootScope.links = [{
    name: 'Home',
    path: '/opengl/'
  }, {
    name: 'Blog',
    path: '/opengl/blog'
  }, {
    name: 'Link',
    path: '#'
  }];
});
