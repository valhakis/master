import angular from 'angular';
module.exports = function preview() {
   return {
      scope: {
         html: '=',
         javascript: '=',
         css: '='
      },
      template: '',
      link: function(scope, element, attributes) {
         var xIframe = document.createElement('iframe');
         element[0].appendChild(xIframe);

         function update() {
            console.clear();
            var html = `
               <html>
                  <head>
                     <base href="http://192.168.0.2:3000/">
                     <title>App</title>
                  </head>
                  <body>
                     <style>${scope.css}</style>
                     ${scope.html}
                     <script>${scope.javascript}</script>
                  </body>
               </html>
            `;
            xIframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
         }
         update();

         scope.$watch('html', function() {
            update();
         }, true);
         scope.$watchCollection('css', function() {
            update();
         });
         scope.$watchCollection('javascript', function() {
            update();
         });
      }
   };
};
