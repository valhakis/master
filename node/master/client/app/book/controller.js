module.exports = function controller($scope, $http) {
   $scope.book = {};
   $scope.books = [];

   $scope.resetBook = function() {
      $scope.book = {
         name: '',
         description: ''
      };
   };

   $scope.createBook = function(book) {
      $http.post('/api/books', book).then(function(res) {
         $scope.resetBook();
         $scope.updateBooks();
      });
   };

   $scope.removeBook = function(book) {
      $http.delete(`/api/books/${book._id}`).then(function(res) {
         $scope.updateBooks();
      });
   };

   $scope.updateBooks = function() {
      $http.get('/api/books').then(function(res) {
         $scope.books = res.data;
      });
   };

   (function() {
      $scope.resetBook();
      $scope.updateBooks();
   })();
};
