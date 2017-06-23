module.exports = function controller(Tutorial, $scope) {
   $scope.tutorials = [];
   $scope.tutorial = {};

   $scope.createTutorial = function(tutorial) {
      Tutorial.create(tutorial).then(function(tutorial) {
         $scope.updateTutorials();
         $scope.resetTutorial();
      });
   };

   $scope.updateTutorials = function() {
      Tutorial.findAll().then(function(tutorials) {
         $scope.tutorials = tutorials;
      });
   };

   $scope.resetTutorial = function() {
      $scope.tutorial = {
         name: ''
      };
   };

   $scope.updateTutorials();
};
