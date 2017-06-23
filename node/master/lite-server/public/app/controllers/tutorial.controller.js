angular.module('app').controller('TutorialController', function($scope, TutorialService) {
   $scope.tutorials = [];
   $scope.tutorial = {};

   $scope.resetTutorial = function() {
      $scope.tutorial = {
         title: ''
      };
   };

   $scope.create = function(tutorial) {
      TutorialService.create(tutorial, function(tutorial) {
         $scope.resetTutorial();
         $scope.findTutorials();
         console.log(tutorial);
      });
   };

   $scope.findTutorials = function() {
      TutorialService.findAll(function(tutorials) {
         $scope.tutorials = tutorials;
      });
   };

   $scope.remove = function(tutorial) {
      TutorialService.remove(tutorial, function() {
         $scope.findTutorials();
      });
   };

   (function() {
      $scope.findTutorials();
      $scope.resetTutorial();
   })();
});
