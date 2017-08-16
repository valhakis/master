import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const app = angular.module('app', [uiRouter]);

app.config(function config($stateProvider) {
	$stateProvider.state('home', {
		url: '/home',
		template: require('./home.template.html')
	});
});

app.run(function run($rootScope) {
	$rootScope.title = 'MONGO';
});
