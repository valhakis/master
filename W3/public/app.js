var app = angular.module('app', ['ui.router']);

app.run(function run($rootScope, $transitions) {
	$transitions.onSuccess({}, function() {
		new ActiveComponentController("#active-component");
	});
	$transitions.onStart({}, function() {
	});
});

app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html'
	});
	$stateProvider.state('component', {
		url: '/component',
		templateUrl: 'partials/component.html',
		controller: 'ComponentController',
		controllerAs: 'vm'
	});
	$stateProvider.state('mongo', {
		url: '/mongo',
		templateUrl: 'partials/mongo.html',
		controller: 'MongoController',
		controllerAs: 'vm'
	});
});

app.controller('ComponentController', function ComponentController($scope, $http) {
	$scope.active = {};
	$scope.components = [];

	$scope.component = {
		title: '',
		description: ''
	};

	$scope.resetComponent = function resetComponent() {
		$scope.component = {
			title: '',
			description: ''
		};
	};

	$scope.createComponent = function createComponent(component) {
		$http.post('api/components', component).then(function success(res) {
			$scope.fetchComponents();
			$scope.resetComponent();
		});
	};
	$scope.fetchComponents = function fetchComponents() {
		$http.get('api/components').then(function success(res) {
			$scope.components = res.data;
		});
	};
	$scope.deleteComponent = function deleteComponent(component) {
		$http.delete(`api/components/${component._id}`).then(function success(res) {
			$scope.fetchComponents();
		});
	};
	$scope.fetchComponents();
	$scope.resetComponent();
});

class ActiveComponentController {
	constructor(id) {
		this.container = document.body.querySelector(id);
		if (!this.container) {
			return;
		}
		this.bar = this.container.querySelector(".bar");
		this.bar.addEventListener('click', () => {
			this.container.classList.toggle('selected');
		});
	}
}

app.controller('MongoController', function MongoController() {

});
