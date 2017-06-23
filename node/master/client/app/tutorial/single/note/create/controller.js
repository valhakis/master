module.exports = function controller(Tutorial, $stateParams) {
  var vm = {};

  vm.resetNote = function() {
    vm.note = {
      title: '',
      content: ''
    };
  };

  vm.createNote = function(note) {
    var tutorialId = $stateParams.tutorialId;
    Tutorial.createNote(tutorialId, note).then(function(note) {
      console.log(note);
      vm.resetNote();
    });
  };

  vm.resetNote();

  return vm;
};
