module.exports = function controller(Problem) {
   var vm = {};
   vm.problems = [];

   vm.updateProblems = function() {
      Problem.findAll().then(function(problems) {
         vm.problems = problems;
      });
   };

   vm.updateProblems();
   return vm;
};
