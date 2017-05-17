export default function DocumentConfig($stateProvider) {
   $stateProvider
      .state('document', {
         url: '/document',
         template: require('./document.template.pug')(),
         redirectTo: 'document.index'
      })
      .state('document.index', {
         url: '/index',
         template: require('./index/index.template.pug')()
      })
   ;
}
