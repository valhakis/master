import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript.js';
import cpp from 'highlight.js/lib/languages/cpp.js';
import 'highlight.js/styles/agate.css';

/*
['javascript', 'python', 'bash'].forEach((langName) => {
  // Using require() here because import() support hasn't landed in Webpack yet
  const langModule = require(`highlight.js/lib/languages/${langName}`);
  hljs.registerLanguage(langName, langModule);
});
*/

hljs.registerLanguage('javascript', javascript);

export default function DocumentCodeDirective() {
   return {
      template: `
         <pre><code class="code"></code></pre>
      `,
      scope: {
         body: '=',
         language: '='
      },
      link: function(scope, element, attributes) {
         var x_code = element[0].getElementsByClassName('code')[0];
         // console.log('LANGUAGE IN CODE:', scope.language);
         x_code.innerText = scope.body;
         // x_code.classList.add(scope.language);
         hljs.highlightBlock(x_code);
      }
   };
}
