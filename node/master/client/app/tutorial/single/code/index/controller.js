module.exports = function controller($scope, tutorial) {
   var vm = {};

   $scope.tutorial = tutorial;
   vm.tutorial = tutorial;

   return vm;
};
