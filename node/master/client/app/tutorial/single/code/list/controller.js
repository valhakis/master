module.exports = function controller(Tutorial, tutorial, Run) {
   var vm = {};

   vm.codes = tutorial.codes;
   vm.tutorial = tutorial;

   vm.updateTutorial = function() {
      Tutorial.findById(tutorial._id).then(function(tutorial) {
         vm.tutorial = tutorial;
         vm.codes = tutorial.codes;
      });
   };

   vm.runCode = function(code) {
      Run
         .run(code.body, 'node')
         .then(function(res) {
            console.log(res);
         }).catch(function(err) {
            console.log(err);
         });
   };

   vm.updateTutorial();
   return vm;
};
