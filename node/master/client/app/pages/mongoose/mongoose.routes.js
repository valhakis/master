import MongooseController from './mongoose.controller';

export default function MongooseRoutes($stateProvider) {
   $stateProvider
      .state('pages.mongoose', {
         url: '/mongoose',
         template: require('./mongoose.view.pug')(),
         redirectTo: 'mongoose.index',
         controller: MongooseController,
         controllerAs: 'MongooseCtrl'
      })
      .state('pages.mongoose.index', {
         url: '/index',
         template: require('./index/index.view.pug')()
      })
      .state('pages.mongoose.editor', {
         url: '/editor',
         template: require('./editor/editor.view.pug')()
      })
   ;
}
