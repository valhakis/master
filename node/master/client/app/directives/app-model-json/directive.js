import hljs from 'highlight.js';

module.exports = function directive() {
   return {
      scope: {
         object: '='
      },
      template: `<pre><code></code></pre>`,
      link: function(scope, element, attributes) {
         var xCode = element[0].getElementsByTagName('code')[0];
         xCode.innerText = JSON.stringify(scope.object, ' ', 4);
         xCode.classList.add('json');
         hljs.highlightBlock(xCode);
      }
   };
};
