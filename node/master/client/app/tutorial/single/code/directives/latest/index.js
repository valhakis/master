module.exports = function latestDirective() {
   return {
      scope: {
         tutorialId: '=',
      },
      controller: function(Tutorial, $scope) {
         Tutorial.findById($scope.tutorialId).then(function(tutorial) {
            $scope.codes = tutorial.codes;
         });
      },
      template: require('./template.pug')(),
      link: function(scope, element, attributes) {
      }
   };
};
