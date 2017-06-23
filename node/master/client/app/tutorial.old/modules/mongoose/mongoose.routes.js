import UserController from './controllers/user.controller';
import PostController from './controllers/post.controller';
import KittenController from './controllers/kitten.controller';
import CodeController from './controllers/code.controller';
import AuthorController from './controllers/author.controller';
import StoryController from './controllers/story.controller';

export default function routes($stateProvider) {
   $stateProvider
   // Routes.
   // ===============================================================
      .state('tutorial.mongoose', {
         url: '/mongoose',
         template: require('./views/mongoose.master.view.pug')()
      })
   // User routes.
   // ===============================================================
      .state('tutorial.mongoose.users', {
         url: '/users',
         template: require('./views/user/index.view.pug')(),
         controller: UserController,
         controllerAs: 'UserCtrl',
         redirectTo: 'tutorial.mongoose.users.list'
      })
      .state('tutorial.mongoose.users.create', {
         url: '/create',
         template: require('./views/user/create.view.pug')()
      })
      .state('tutorial.mongoose.users.list', {
         url: '/list',
         template: require('./views/user/list.view.pug')()
      })
   // Post routes.
   // ===============================================================
      .state('tutorial.mongoose.posts', {
         url: '/posts',
         template: require('./views/post/index.view.pug')(),
         redirectTo: 'tutorial.mongoose.posts.list',
         controller: PostController,
         controllerAs: 'PostCtrl'
      })
      .state('tutorial.mongoose.posts.list', {
         url: '/list',
         template: require('./views/post/list.view.pug')(),
      })
      .state('tutorial.mongoose.posts.create', {
         url: '/create',
         template: require('./views/post/create.view.pug')(),
      })
   // Kitten routes.
   // ===============================================================
      .state('tutorial.mongoose.kittens', {
         url: '/kittens',
         template: require('./views/kitten/master.view.pug')(),
         redirectTo: 'tutorial.mongoose.kittens.index',
         controller: KittenController,
         controllerAs: 'KittenCtrl'
      })
      .state('tutorial.mongoose.kittens.index', {
         url: '/index',
         template: require('./views/kitten/index.view.pug')(),
      })
      .state('tutorial.mongoose.kittens.create', {
         url: '/create',
         template: require('./views/kitten/create.view.pug')(),
      })
   // Code routes.
   // ===============================================================
      .state('tutorial.mongoose.codes', {
         url: '/codes',
         template: require('./views/code/master.view.pug')(),
         // redirectTo: 'tutorial.mongoose.codes.index',
         controller: CodeController,
         controllerAs: 'CodeCtrl'
      })
   // Author routes.
   // ===============================================================
      .state('tutorial.mongoose.authors', {
         url: '/authors',
         template: require('./views/author/master.view.pug')(),
         // redirectTo: 'tutorial.mongoose.authors.index',
         controller: AuthorController,
         controllerAs: 'AuthorCtrl'
      })
   // Story routes.
   // ===============================================================
      .state('tutorial.mongoose.stories', {
         url: '/stories',
         template: require('./views/story/master.view.pug')(),
         // redirectTo: 'tutorial.mongoose.stories.index',
         controller: StoryController,
         controllerAs: 'StoryCtrl'
      })
   ;
}
