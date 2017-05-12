import routes from './home.routes';

var mod = angular.module('app.pages.home', []);

mod.config(routes);

export default mod.name;
