module.exports = function controller(Tutorial, $stateParams) {
  var tutorialId = $stateParams.tutorialId;

  var vm = {};

  vm.tutorial = null;
  vm.codes = null;
  vm.notes = null;

  vm.updateTutorial = function() {
    Tutorial.findById(tutorialId).then(function(tutorial) {
      vm.tutorial = tutorial;
      vm.codes = tutorial.codes;
      vm.notes = tutorial.notes;
    });
  };
  
  vm.updateTutorial();
  return vm;
};
