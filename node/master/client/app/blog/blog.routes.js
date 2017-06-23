import BlogController from './blog.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('blog', {
         url: '/blog',
         template: require('./blog.view.pug')(),
         controller: BlogController,
         controllerAs: 'blog'
      })
      .state('blog.home', {
         url: '/home',
         template: require('./views/home.view.pug')()
      })
      .state('blog.post', {

      });
      // .state('blog.post.create', {

      // });
}
