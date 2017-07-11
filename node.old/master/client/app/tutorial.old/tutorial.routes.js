// zenburn.css, tomorrow-night.css, monokai_sublime.css
import BootstrapController from './controllers/bootstrap.controller';
import SectionController from './controllers/section.controller';
import UserController from './controllers/user.controller';
import JwtUserController from './jwt-auth/user.controller';

export default function routes($stateProvider, UserRoles) {
   $stateProvider
      .state('tutorial', {
         url: '/tutorial',
         template: require('./tutorial.view.pug')(),
         redirectTo: 'tutorial.index'
      })
      .state('tutorial.index', {
         url: '/index',
         template: require('./views/index.view.pug')()
      })
      .state('tutorial.todos', {
         url: '/todos',
         template: require('./views/todos.view.pug')()
      })
      .state('tutorial.users', {
         url: '/users',
         template: require('./views/users.view.pug')(),
         controller: UserController,
         controllerAs: 'UserCtrl'
      })
      .state('tutorial.dashboard', {
         url: '/dashboard',
         template: require('./views/dashboard.view.pug')(),
         data: {
            authorizedRoles: [UserRoles.normal]
         }
      })
      .state('tutorial.protected', {
         url: '/protected',
         template: require('./views/protected.view.pug')(),
         resolve: {
            auth: function resolveAuthentication(AuthResolver) {
               return AuthResolver.resolve();
            }
         }
         /*resolve: {
            auth: function resolveAuthentication(AuthResolver) {
               return AuthResolver.resolve();
            }
         }*/
      })
      .state('tutorial.node', {
         url: '/node',
         template: require('./views/node.view.pug')()
      })
      .state('tutorial.programmingLanguages', {
         url: '/programming-languages',
         template: require('./views/programming-languages.view.pug')()
      })
      .state('tutorial.jwtAuth', {
         url: '/jwt-auth',
         template: require('./views/jwt-auth.view.pug')(),
         controller: JwtUserController,
         controllerAs: 'UserCtrl'
      })
      .state('tutorial.sections', {
         url: '/sections',
         template: require('./views/sections.view.pug')(),
         controller: SectionController,
         controllerAs: 'SectionCtrl'
      })
      .state('tutorial.highlightjs', {
         url: '/highlightjs',
         template: require('./views/highlightjs.view.pug')()
      })
      .state('tutorial.ace', {
         url: '/ace',
         template: require('./views/ace.view.pug')()
      })
      .state('tutorial.bootstrap', {
         url: '/bootstrap',
         template: require('./views/bootstrap.view.pug')(),
         controller: BootstrapController,
         controllerAs: 'bs'
      })
      .state('tutorial.angular', {
         url: '/angular',
         template: require('./views/angular.view.pug')(),
         controller: function() {
            // require('!style-loader!css-loader!highlight.js/styles/androidstudio.css');
            // require('!style-loader!css-loader!bower_components/highlightjs/styles/atom-one-dark.css');
         }
      });
}
