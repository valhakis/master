module.exports = function controller(Tutorial, $stateParams) {
  var tutorialId = $stateParams.tutorialId;

  var vm = {};

  vm.updateTutorial = function() {
    Tutorial.findById(tutorialId).then(function(tutorial) {
      vm.tutorial = tutorial;
      vm.notes = tutorial.notes;
      console.log(tutorial);
    });
  };

  vm.updateTutorial();
  return vm;
};
