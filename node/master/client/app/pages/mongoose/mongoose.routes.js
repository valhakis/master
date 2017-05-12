import MongooseController from './mongoose.controller';

export default function MongooseRoutes($stateProvider) {
   $stateProvider
      .state('mongoose', {
         url: '/mongoose',
         template: require('./mongoose.view.pug')(),
         redirectTo: 'mongoose.index',
         controller: MongooseController,
         controllerAs: 'MongooseCtrl'
      })
      .state('mongoose.index', {
         url: '/index',
         template: require('./index/index.view.pug')()
      })
      .state('mongoose.editor', {
         url: '/editor',
         template: require('./editor/editor.view.pug')()
      })
   ;
}
