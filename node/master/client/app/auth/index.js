import AuthRoutes from './auth.routes';
import AuthEvents from './auth.events';
import AuthController from './auth.controller';
import AuthRun from './auth.run';
import AuthService from './auth.service.js';
import UserRoles from './user.roles';
import SessionService from './session.service';
import AuthInterceptor from './auth.interceptor.service';
import AuthResolver from './auth.resolver.service';

var mod = angular.module('auth', []);

mod.run(AuthRun);
mod.config(AuthRoutes);
mod.constant('AuthEvents', AuthEvents);
mod.constant('UserRoles', UserRoles);
mod.factory('AuthService', AuthService);
mod.factory('AuthInterceptor', AuthInterceptor);
mod.factory('AuthResolver', AuthResolver);
mod.controller('AuthController', AuthController);
mod.service('Session', SessionService);

export default mod.name;
