module.exports = function controller($scope, $http) {
   $scope.currentMongoose = null;

   $scope.mongooses = [];

   $http.get('/api/mongoose').then(function(res) {
      // console.log(res.data);
   });

   $scope.updateMongooses = function() {
      $http.get('/api/mongooses').then(function(res) {
         $scope.mongooses = res.data;
         // console.log(res.data);
      });
   };

   $scope.setCurrentMongoose = function(mongoose) {
      $scope.currentMongoose = mongoose;
   };

   $scope.unsetMongoose = function() {
      $scope.currentMongoose = null;
   };

   (function() {
      $scope.updateMongooses();
   })();
};
