import routes from './dashboard.routes';

var mod = angular.module('app.pages.dashboard', []);

mod.config(routes);

export default mod.name;
