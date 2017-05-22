module.exports = function TutorialListDirective() {
   return {
      scope: {
         'tutorials': '=',
         'removed': '='
      },
      controllerAs: 'vm',
      controller: function(Tutorial, $scope) {
         var vm = {};

         vm.tutorials = [];

         if ($scope.tutorials) {
            vm.tutorials = $scope.tutorials;
         }

         vm.updateTutorials = function() {
            if ($scope.removed) {
               Tutorial.findRemoved().then(function(tutorials) {
                  vm.tutorials = tutorials;
               });
            } else {
               Tutorial.findAll().then(function(tutorials) {
                  vm.tutorials = tutorials;
               });
            }
         };

         vm.removeTutorial = function(tutorial) {
            Tutorial.remove(tutorial).then(function() {
               vm.updateTutorials();
            });
         };

         vm.recoverTutorial = function(tutorial) {
            Tutorial.recover(tutorial).then(function() {
               vm.updateTutorials();
            });
         };

         vm.removePermanently = function(tutorial) {
            Tutorial.destroy(tutorial).then(function() {
               vm.updateTutorials();
            });
         };

         return vm;
      },
      template: require('./template.pug')(),
      link: function(scope, element, attributes, vm) {
         scope.$watchGroup(['tutorials', 'removed'], function() {
            vm.updateTutorials();
         });
      }
   };
};
