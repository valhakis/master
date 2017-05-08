export default function routes($stateProvider) {
   $stateProvider
      .state('videos', {
         url: '/videos',
         template: require('./video.template.pug')(),
         controller: 'VideoController',
         controllerAs: 'video'
      })
      .state('videos.add', {
         url: '/add',
         template: require('./views/add.view.pug')()
      })
   ;
}
