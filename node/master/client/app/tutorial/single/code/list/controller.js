module.exports = function controller(Tutorial, tutorial, Run, $stateParams) {
  var tutorialId = $stateParams.tutorialId;
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

  vm.removeCode = function(code) {
    Tutorial.removeCode(tutorialId, code._id).then(function(res) {
      vm.updateTutorial();
    });
  };

  vm.updateTutorial();
  return vm;
};
