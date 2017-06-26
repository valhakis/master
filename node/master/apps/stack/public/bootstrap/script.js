var app = angular.module('app', []);

app.directive('card', function() {
  return {
    templateUrl: 'partials/card.html'
  };
});

app.directive('navigation', function() {
  return {
    templateUrl: 'partials/navigation.html'
  };
});

app.directive('search', function() {
  return {
    templateUrl: 'partials/search.html'
  };
});
