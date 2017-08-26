var share = angular.module('share', []);

share.directive('shareCmd', function() {
	return {
		template: 'NO TEMPLATE',
		transclude: true,
		compile: function(element, attributes, transclude) {
			console.log(element[0].innerHTML);
			return function example(scope, iElement, iAttrs) {
				transclude(scope, function(clone) {
					var element = iElement[0];
					//console.log(clone[0]);
					//element.innerHTML = clone[0];
				});
			}
			/*
			return {
				pre: function(scope, element, attrs) {
					console.log(element[0].innerHTML);
				},
				post: function(scope, element, attrs) {
					console.log(element[0].innerHTML);
				}
			};
			*/
		}
	};
});
