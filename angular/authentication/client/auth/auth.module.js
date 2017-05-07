import routes from './auth.routes';

var mod = angular.module('app.mod', []);

mod.config(routes);

export default mod.name;
