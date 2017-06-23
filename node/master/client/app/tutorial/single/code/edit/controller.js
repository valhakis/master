module.exports = function controller($scope, Tutorial, $stateParams) {
  var tutorialId = $stateParams.tutorialId;
  var codeId = $stateParams.codeId;

  var vm = {};
  vm.code = {};

  //vm.update = function() {
  //console.log('UPDATE HAS BEEN CALLLED');
  //};

  Tutorial.findCodeById(tutorialId, codeId).then(function(code) {
    vm.code = code;
    vm.update(vm.code);
    // console.log(code);
  });

  vm.editCode = function(code) {
    Tutorial.updateCode(tutorialId, code).then(function(res) {
      console.log(res);
    });
    // console.log('I HAVE TO EDIT CODE');
  };

  return vm;
};
