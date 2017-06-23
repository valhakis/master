export default function config($stateProvider) {
   $stateProvider
      .state('book', {
         url: '/book',
         template: require('./template.pug')(),
         redirectTo: 'book.index',
         controller: require('./controller')
      })
      .state('book.index', {
         url: '/index',
         template: require('./index/template.pug')()
      })
   ;
}
