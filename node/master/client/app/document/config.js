module.exports = function DocumentConfig($stateProvider) {
   $stateProvider
      .state('document', {
         url: '/document',
         template: require('./template.pug')(),
         redirectTo: 'document.index',
         controller: require('./controller')
      })
      .state('document.index', {
         url: '/index',
         template: require('./index/template.pug')()
      })
      .state('document.documents', {
         url: '/documents',
         template: require('./documents/template.pug')()
      })
   ;
};
