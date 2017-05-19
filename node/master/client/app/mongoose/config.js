export default function config($stateProvider) {
   $stateProvider
      .state('mongoose', {
         url: '/mongoose',
         template: require('./template.pug')(),
         controller: require('./controller'),
         redirectTo: 'mongoose.index'
      })
      .state('mongoose.index', {
         url: '/index',
         template: require('./index/template.pug')()
      })
      .state('mongoose.create', {
         url: '/create',
         template: require('./create/template.pug')(),
         controller: require('./create/controller')
      })
   ;
}
