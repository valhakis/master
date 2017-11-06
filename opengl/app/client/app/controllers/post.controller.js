export default function PostController(CONSTANTS, $scope, $http) {
  $scope.post = {};
  $scope.posts = [];

  $scope.submit = function(post) {
    $http.post(CONSTANTS.API + '/posts', {
      title: post.title,
      body: post.body
    }).then(function(response) {
      console.log(response.data);
    });
  };

  $http.get(CONSTANTS.API + '/posts').then(function(response) {
    $scope.posts = response.data;
  });

  $scope.remove_post = function(post) {
    $http.delete(CONSTANTS.API + '/posts/' + post._id).then(function(response) {
      console.log(response.data);
    });
  };

  $scope.view_post = function(post) {
    window.location.replace('/opengl/posts/' + post._id);
  };
};
