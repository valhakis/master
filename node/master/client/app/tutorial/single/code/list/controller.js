module.exports = function controller(tutorial, Run) {
   var vm = {};

   vm.codes = tutorial.codes;
   vm.tutorial = tutorial;

   vm.runCode = function(code) {
      Run
         .run(code.body, 'node')
         .then(function(res) {
            console.log(res);
         }).catch(function(err) {
            console.log(err);
         });
   };

   return vm;
};
