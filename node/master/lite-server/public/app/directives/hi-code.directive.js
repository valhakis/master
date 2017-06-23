angular.module('app').directive('hiCode', function() {
   return {
      scope: {
         body: '='
      },
      template: `
         <pre><code class="code"></code></pre>
      `,
      link: function(scope, element, attributes) {
         var x_code = element[0].getElementsByClassName('code')[0];
         scope.$watch(attributes.body, function(value) {
            x_code.innerText = scope.body;
            hljs.highlightBlock(x_code);
         });
      }
   };
});
