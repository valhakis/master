module.exports = function controller($scope, $http) {
   $scope.mongoose = {};

   $scope.create = function(mongoose) {
      $http.post('/api/mongooses', {
         name: mongoose.name
      }).then(function(res) {
         $scope.resetMongoose();
         $scope.updateMongooses();
         console.log(res.data);
      });
   };

   $scope.resetMongoose = function() {
      $scope.mongoose = {
         name: ''
      };
   };

   (function() {
      $scope.resetMongoose();
   })();
};
