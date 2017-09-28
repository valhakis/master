var Prism = require('prismjs');
var source = require('raw-loader!./app/main.cc');
var html = Prism.highlight(source, Prism.languages.javascript);

module.exports = function Tutorial01Controller($scope) {
  $scope.data = source;
};
