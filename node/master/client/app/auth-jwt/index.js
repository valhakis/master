import angular from 'angular';

import AuthRun from './auth.run';
import AuthRoutes from './auth.routes';
import AuthService from './auth.service';

export default angular.module('app.authJwt', [
   // 'ngMockE2E', 
   // 'ngStorage'
])
   .run(AuthRun)
   .config(AuthRoutes)
   .factory('Auth', AuthService)
   .name;
