import angular from 'angular';

import Prism from 'prismjs';

var source = angular.module('source', []);

source.directive('rawSource', function() {
  return {
    scope: {
      data: '='
    },
    template: '<pre><code></code></pre>',
    link: function(scope, elem, attrs) {
      var code = elem[0].querySelector('code');
      code.innerHTML = Prism.highlight(scope.data, Prism.languages.cpp);
    }
  };
});

export default source.name;
