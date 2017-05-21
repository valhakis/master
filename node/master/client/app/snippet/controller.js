module.exports = function controller($scope, Snippet) {
   // $scope.snippets = snippets;
   $scope.snippet = {};

   $scope.saveSnippet = function(snippet) {
      Snippet.save(snippet).then(function(snippet) {
         console.log(snippet);
      });
   };

   $scope.createSnippet = function(snippet) {
      Snippet.create(snippet, function(snippet) {
         $scope.updateSnippets();
         $scope.resetSnippet();
      });
   };

   $scope.removeSnippet = function(snippet) {
      Snippet.remove(snippet._id).then(function(snippet) {
         console.log(snippet);
         $scope.updateSnippets();
      });
   };

   // console.log(Snippet.getSnippet($scope.snippets[0]));

   //Snippet.getSnippet($scope.snippets[1]._id).then(function(snippet) {
      // console.log(snippet);
   //});

   $scope.resetSnippet = function() {
      $scope.snippet = {
         name: '',
         javascript: '',
         css: '',
         html: ''
      };
   };

   $scope.updateSnippets = function() {
      Snippet.all(function(snippets) {
         $scope.snippets = snippets;
      });
   };

   $scope.openNewTab = function(snippet) {
      var html = `
         <html>
            <head>
               <style>${snippet.css}</style>
            </head>
            <body>
               ${snippet.html}
               <script>${snippet.javascript}</script>
            </body>
         </html>
      `;
      var data = 'data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E';
      var win = window.open(data, '_blank');
      win.focus();
      // html = `<p>example content text</p>`;
      // var win = window.open(`data:text/html,<script>alert('hi');</script>`);
   };

   $scope.resetSnippet();
   $scope.updateSnippets();
};
