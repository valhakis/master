export default function BootstrapEditorDirective() {
   return {
      scope: {

      },
      template: `
         <div class="editor"></div>
         <br>
         <pre><code class="html-preview"></code></pre>
         <br>
         <div class="preview"></div>
      `,
      link: function(scope, element, attributes) {
         // Editor element
         var xEditor = element[0].getElementsByClassName('editor')[0];
         var editor = ace.edit(xEditor);
         editor.setTheme('ace/theme/monokai');
         editor.getSession().setMode('ace/mode/jade');

         $(xEditor).css({
            'min-height': '200px'
         });

         console.log(xEditor);

         // HTML Preview element
         var xHTMLPreview = element[0].getElementsByClassName('html-preview')[0];
         var xPreview = element[0].getElementsByClassName('preview')[0];

         editor.on('change', function() {
            var html = jade.compile(editor.getValue())();
            xHTMLPreview.innerText = html_beautify(html);
            hljs.highlightBlock(xHTMLPreview);
            xPreview.innerHTML = html;
         });
      }
   };
}
