import PostController from './post.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('blog.post.create', {
         url: '/create',
         template: require('./views/create.view.pug')(),
         controller: PostController,
         controllerAs: 'vm'
      })
      .state('blog.post.index', {
         url: '/index',
         template: require('./views/index.view.pug')()
      });
}
