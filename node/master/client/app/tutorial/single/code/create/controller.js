module.exports = function controller(Tutorial, tutorial) {
  var vm = {};

  vm.code = {};

  vm.resetCode = function() {
    vm.code = {
      title: '',
      body: '',
      language: 'javascript'
    };
    if (typeof vm.updateEditor == 'function') {
      vm.updateEditor(vm.code);
    }
  };

  vm.createCode = function(code) {
    Tutorial.createCode(tutorial._id, code).then(function(code) {
      vm.resetCode();
    });
  };

  vm.resetCode();

  return vm;

};
