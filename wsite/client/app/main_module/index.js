var main_module = angular.module('app.main', []);

main_module.config(require('./main.config'));
main_module.config(require('./main.routes'));

module.exports = main_module.name;
