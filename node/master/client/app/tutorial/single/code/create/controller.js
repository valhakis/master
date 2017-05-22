module.exports = function controller(Tutorial, tutorial) {
   var vm = {};

   vm.code = {};

   vm.resetCode = function() {
      vm.code = {
         title: '',
         body: ''
      };
   };

   vm.createCode = function(code) {
      Tutorial.createCode(tutorial._id, code).then(function(code) {
         vm.resetCode();
      });
   };

   vm.resetCode();

   return vm;

};
