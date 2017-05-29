module.exports = function controller(Tutorial, $stateParams) {
  var tutorialId = $stateParams.tutorialId;
  var codeId = $stateParams.codeId;

  var vm = {};
  vm.code = {};

  Tutorial.findCodeById(tutorialId, codeId).then(function(code) {
    console.log(code);
  });

  console.log($stateParams);

  return vm;
};
