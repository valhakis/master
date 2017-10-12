var app = angular.module('app', []);

app.run(function run($rootScope) {
	$rootScope.title = '2017-08-15';
});

app.directive('srcCode', function($http) {
	return {
		template: `
		<pre><code></code></pre>
		`,
		controller: function srcCodeController() {

		},
		controllerAs: 'vm',
		link: function(scope, element, attributes, controller) {
			var container = element[0];
			container.style.display = 'block';
			container.classList.add('w3-card', 'w3-panel');
			var file = container.getAttribute('file');
			var code = container.querySelector('pre code');
			$http.get(`src/${file}`).then(function success(res) {
				code.innerHTML = Prism.highlight(res.data, Prism.languages.javascript);
			});
		}
	};
});

app.controller('TodoController', function TodoController($scope) {
	$scope.title = 'TODO';
});

app.controller('PersonController', function PersonController($scope) {
	$scope.persons = [
		{
			id: 1,
			name: "William Valhakis",
			wealth: 2345123.32
		},
		{
			id: 2,
			name: "Vladimir Putin",
			wealth: 5212352.5
		},
		{
			id: 3,
			name: "Donald Trump",
			wealth: 5298512.235
		},
		{
			id: 4,
			name: "Albert Einstein",
			wealth: 2105983.63
		},
	];
});

app.filter('wealth', function wealth() {
	return function (input, optional1, optional2) {
		return Number(input).toLocaleString('et-EE', {style: 'currency', currency: 'EUR'});
	};
});

app.controller('MainController', function MainController($scope, $http) {
	$scope.options = [];
	$scope.theme = '';

	$scope.change = function change() {
		localStorage.theme = $scope.theme;
		location.reload();
	};

	$http.get('/Prism/themes').then(function success(res) {
		res.data.forEach(function(theme, index) {
			$scope.options.push({
				id: index,
				theme: theme
			});
		});
		if (localStorage.theme) {
			$scope.theme = localStorage.theme;
		}
	});
});
