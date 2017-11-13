(function() {

  window.server_app = {
    _root: '/server-app/',
    path: function(path) {
      return this._root + '/' + path;
    }
  };

  var server_app = angular.module('server-app', []);

  server_app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%').endSymbol('%>');
  });

  server_app.run(function() {
    console.log('SERVER APP RAN');
  });
  /*
  angular.element(function() {
    angular.bootstrap(document, ['server-app']);
  });
  */

  // server-app-row
  server_app.directive('serverAppRow', function() {
    return {
      templateUrl: window.server_app.path('row.directive.html')
      // template: 'THE SERVER APP ROW DIRECTIVE'
    };
  });

  // server-app-blog-posts
  server_app.directive('serverAppBlogPosts', function() {
    return {
      controller: function($scope, $http) {
        $scope.posts = [];
        $http.get('/api/posts').then(response => {
          $scope.posts = response.data;
        });
      },
      templateUrl: window.server_app.path('blog-posts.directive.html')
    };
  });

  // server-app-post-create
  server_app.directive('serverAppPostCreate', function() {
    return {
      controller: function($scope, $http) {
        $scope.post = {};

        $scope.submit = function(post) {
          $http.post('/api/posts', post).then(response => {
            $scope.post = {};
          });
        };
      },
      templateUrl: window.server_app.path('post-create.directive.html')
    };
  });
})();
