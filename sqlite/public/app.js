var app = angular.module('app', ['share']);

app.config(function config($interpolateProvider) {
 $interpolateProvider.startSymbol('<%').endSymbol('%>');
});

app.run(function run($rootScope) {
	$rootScope.title = 'SQLITE: ROOT SCOPE TITLE';
});
