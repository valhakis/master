import routes from './home.routes';

import HomeController from './home.controller';

var mod = angular.module('app.home', []);

mod.config(routes);

mod.controller('HomeController', HomeController);

export default mod.name;
