import routes from './auth.routes';
import AuthService from './auth.service';
import AuthEvents from './auth.events';
import SessionService from './session.service';
import AuthRoles from './auth.roles';
import AuthInterceptor from './auth.interceptor';

var mod = angular.module('app.mod', []);

mod.config(routes);

mod.constant('AuthRoles', AuthRoles);
mod.constant('AuthEvents', AuthEvents);
mod.service('Session', SessionService);
mod.factory('AuthService', AuthService);
mod.factory('AuthInterceptor', AuthInterceptor);

export default mod.name;
