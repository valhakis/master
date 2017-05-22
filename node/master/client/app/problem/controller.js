module.exports = function controller(Problem, $scope) {
   $scope.problems = [];
   $scope.problem = {};

   $scope.resetProblem = function() {
      $scope.problem = {
         title: '',
         content: ''
      };
   };

   $scope.createProblem = function(problem) {
      Problem.create(problem).then(function(problem) {
         $scope.updateProblems();
         $scope.resetProblem();
      });
   };

   $scope.updateProblems = function() {
      Problem.findAll().then(function(problems) {
         $scope.problems = problems;
      });
   };

   $scope.resetProblem();
   $scope.updateProblems();
};
