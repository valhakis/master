import hljs from 'highlight.js';
import 'highlight.js/lib/languages/cpp';
import 'highlight.js/lib/languages/makefile';

module.exports = function($timeout) {
  return {
    template: `<pre><code></code></pre>`,
    scope: {
      object: '=',
      body: '=',
      code: '=',
      bind: '=',
      language: '='
    },
    link: function(scope, element, attributes) {
      var xCode = element[0].getElementsByTagName('code')[0];

      if (scope.language) {
        xCode.classList.add(scope.language);
      } else {
        xCode.classList.add('javascript');
      }

      if (scope.object) {
        xCode.innerText = JSON.stringify(scope.object, ' ', 2);
      } else if (scope.body) {
        xCode.innerText = scope.body;
      } else if (scope.code) {
        xCode.innerText = scope.code;
      }

      hljs.highlightBlock(xCode);

      scope.$watch('language', function(newValue, oldValue) {
        if (oldValue) {
          xCode.classList.remove(oldValue);
        }
        if (newValue) {
          xCode.classList.add(newValue);
        }
        hljs.highlightBlock(xCode);
      });

      var timeoutId = null;
      var update = function(newValue) {
        if (timeoutId === null) {
          if (!newValue || newValue == 'undefined') return;
          timeoutId = $timeout(function() {
            xCode.innerText = newValue;
            hljs.highlightBlock(xCode);
            timeoutId = null;
          }, 1000);
        }
      };

      scope.$watch('object', function(newValue, oldValue) {
        if (typeof newValue == 'object') {
          if (newValue.length > 0) {
            update(JSON.stringify(newValue, ' ', 2));
          }
        }
      });
      scope.$watch('body', function(newValue, oldValue) {
        update(newValue);
      });
      scope.$watch('code', function(newValue, oldValue) {
        update(newValue);
      });
      scope.$watch('bind', function(newValue, oldValue) {
        update(newValue);
      });

      /*
         scope.$watchGroup(['language', 'body', 'code', 'language'], function() {
            console.log(scope.language);
               timeoutId = $timeout(function() {
                  console.log('HIGHLIGHT!');
                  hljs.highlightBlock(xCode);
                  timeoutId = null;
               }, 1000);
            }
         });
         */
    }
  };
};
