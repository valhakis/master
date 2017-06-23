module.exports = function config($stateProvider) {
   $stateProvider
      .state('snippet', {
         url: '/snippet',
         template: require('./template.pug')(),
         redirectTo: 'snippet.index',
         controller: require('./controller'),
         resolve: {
            snippets: function(Snippet) {
               return Snippet.getAllSnippets();
            }
         }
      })
      .state('snippet.index', {
         url: '/index',
         template: require('./index/template.pug')()
      })
      .state('snippet.create', {
         url: '/create',
         template: require('./create/template.pug')()
      })
      .state('snippet.list', {
         url: '/list',
         template: require('./list/template.pug')()
      })
      .state('snippet.single', {
         url: '/single/{snippetId}',
         template: require('./single/template.pug')(),
         resolve: {
            snippet: function(Snippet, $transition$) {
               return Snippet.getSnippet($transition$.params().snippetId);
            }
         },
         controller: require('./single/controller')
      })
   ;
};
