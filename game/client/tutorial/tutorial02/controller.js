var main = require('raw-loader!./app/main.cc');
var vertex_source = require('raw-loader!./app/default.vs');
var fragment_source = require('raw-loader!./app/default.fs');

module.exports = function Tutorial02Controller($scope) {
  $scope.main = main;
  $scope.vertex_source = vertex_source;
  $scope.fragment_source = fragment_source;
};
