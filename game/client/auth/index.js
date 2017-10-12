import angular from 'angular';

var auth = angular.module('auth', []);

auth.directive('authLoginDirective', require('./login.directive'))
auth.directive('authRegisterDirective', require('./register.directive'))
auth.factory('Auth', require('./auth.service'));

auth.controller('AuthController', function AuthController(Auth) {
  console.log('WHAT');
  // Auth.setCredentials('what');
});

export default auth.name;
