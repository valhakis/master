/* global angular */

angular
  .module('app', ['ui.bootstrap'])
  .controller('AwesomeController', AwesomeController);

function AwesomeController($scope) {

  $scope.setActive = function(index) {
    $scope.active = index;
  };

  // $scope.goToTab1 = function() {
    // $scope.current = 0;
  // };

  $scope.tabs = [
    {
      title: "Awesome Title 1", 
      content: "Awesome content 1"
    },
    {
      title: "Awesome Title 2", 
      content: "Awesome content 2"
    }
  ];
}
