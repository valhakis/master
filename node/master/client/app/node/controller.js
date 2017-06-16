module.exports = function controller(Node, $scope) {
  var vm = {};

  vm.node = {};
  vm.nodes = [];

  vm.createNode = function() {
    Node.create(vm.node).then(node => {
      vm.update();
    });
  };

  vm.resetNode = function() {
    vm.node = { name: '' };
  };

  vm.update = function() {
    vm.resetNode();
    Node.findAll().then(nodes => {
      vm.nodes = nodes;
    });
  };

  vm.update();

  return vm;
};
