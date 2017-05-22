module.exports = function controller(code, Code, $state) {
   var vm = {};

   vm.code = code;

   vm.updateCode = function(code) {
      Code.update(code).then(function(code) {
         $state.go('code.single', {codeId: code._id});
      });
   };
   
   return vm;
};
