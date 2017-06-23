import routes from './test.routes';
import LoginDirective from './login/login.directive';
import NavDirective from './nav/nav.directive';
import AuthService from './auth/auth.service.js';
import TestController from './test.controller';

var mod = angular.module('app.test', []);

mod.config(routes);

mod.directive('testLogin', LoginDirective);
mod.directive('testNav', NavDirective);
mod.factory('TestAuthService', AuthService);
mod.controller('TestController', TestController);

export default mod.name;
