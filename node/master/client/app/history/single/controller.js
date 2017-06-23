module.exports = function($state, $http, $scope, history) {
   $scope.title = 'SINGLE CONTROLLER SCOPE';
   $scope.history = history;

   $scope.languages = [
      {
         name: "Javascript",
         value: "javascript"
      },
      {
         name: "PHP",
         value: "php"
      },
      {
         name: "C",
         value: "c"
      }
   ];

   $scope.post = {};
   $scope.code = {};

   $scope.resetPost = function() {
      $scope.post = {
         title: '',
         body: ''
      };
   };

   $scope.resetCode = function() {
      $scope.code = {
         title: '',
         body: ''
      };
   };

   $scope.addPost = function(post) {
      $http.post(`/api/histories/${history._id}/posts`, {
         title: post.title,
         body: post.body
      }).then(function(res) {
         $scope.updateHistory();
         $scope.resetPost();
      });
   };

   $scope.addCode = function(code) {
      $http.post(`/api/histories/${history._id}/codes`, {
         title: code.title,
         body: code.body,
         language: code.language
      }).then(function(res) {
         $scope.updateHistory();
         $scope.resetCode();
      });
   };

   $scope.deleteHistory = function(history) {
      $http.delete(`/api/histories/${history._id}`).then(function(res) {
         $scope.updateHistory();
      });
   };

   $scope.removeCode = function(code) {
      $http.delete(`/api/histories/${history._id}/codes/${code._id}`).then(function(res) {
         $scope.updateHistory();
         // console.log(res.data);
      });
   };

   $scope.updateHistory = function() {
      $http.get(`/api/histories/${$scope.history._id}`).then(function(res) {
         $scope.history = res.data;
      });
   };

   (function() {
      $scope.resetPost();
   })();
};
