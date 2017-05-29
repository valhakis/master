module.exports = function config($stateProvider) {
  $stateProvider
  /* tutorial routes */
    .state('tutorial', {
      url: '/tutorial',
      controller: require('./controller'),
      template: require('./template.pug')(),
      redirectTo: 'tutorial.index'
    })
    .state('tutorial.index', {
      url: '/index',
      controller: require('./index/controller'),
      template: require('./index/template.pug')()
    })
    .state('tutorial.create', {
      url: '/create',
      controller: require('./create/controller'),
      template: require('./create/template.pug')()
    })
    .state('tutorial.list', {
      url: '/list',
      controller: require('./list/controller'),
      template: require('./list/template.pug')()
    })
    .state('tutorial.removed', {
      url: '/removed',
      controller: require('./removed/controller'),
      template: require('./removed/template.pug')()
    })
  /* tutorial single routes */
    .state('tutorial.single', {
      url: '/single/{tutorialId}',
      controller: require('./single/controller'),
      template: require('./single/template.pug')(),
      resolve: {
        tutorial: function(Tutorial, $transition$) {
          return Tutorial.single($transition$.params().tutorialId);
        }
      },
      redirectTo: 'tutorial.single.index'
    })
    .state('tutorial.single.index', {
      url: '/index',
      template: require('./single/index/template.pug')(),
      controller: require('./single/index/controller'),
      controllerAs: 'vm'
    })
  /* tutorial single code routes */
    .state('tutorial.single.code', {
      url: '/code',
      template: require('./single/code/template.pug')(),
      redirectTo: 'tutorial.single.code.index'
    })
    .state('tutorial.single.code.index', {
      url: '/index',
      template: require('./single/code/index/template.pug')(),
      controller: require('./single/code/index/controller'),
      controllerAs: 'vm'
    })
    .state('tutorial.single.code.list', {
      url: '/list',
      template: require('./single/code/list/template.pug')(),
      controller: require('./single/code/list/controller'),
      controllerAs: 'vm'
    })
    .state('tutorial.single.code.create', {
      url: '/create',
      controller: require('./single/code/create/controller'),
      controllerAs: 'vm',
      template: require('./single/code/create/template.pug')()
    })
    .state('tutorial.single.code.edit', {
      url: '/edit/{codeId}',
      controller: require('./single/code/edit/controller'),
      controllerAs: 'vm',
      template: require('./single/code/edit/template.pug')()
    })
  /* tutorial single snippet routes */
    .state('tutorial.single.snippet', {
      url: '/snippet',
      template: require('./single/snippet/template.html'),
      redirectTo: 'tutorial.single.snippet.index'
    })
    .state('tutorial.single.snippet.index', {
      url: '/index',
      template: require('./single/snippet/index/template.html'),
      controller: require('./single/snippet/index/controller'),
      controllerAs: 'vm'
    })
  /* tutorial single note routes */
    .state('tutorial.single.note', {
      url: '/note',
      template: require('./single/note/template.html'),
      redirectTo: 'tutorial.single.note.index'
    })
    .state('tutorial.single.note.index', {
      url: '/index',
      template: require('./single/note/index/template.html'),
      controller: require('./single/note/index/controller'),
      controllerAs: 'vm'
    })
    .state('tutorial.single.note.create', {
      url: '/create',
      template: require('./single/note/create/template.html'),
      controller: require('./single/note/create/controller'),
      controllerAs: 'vm'
    })
    .state('tutorial.single.note.list', {
      url: '/list',
      template: require('./single/note/list/template.html'),
      controller: require('./single/note/list/controller'),
      controllerAs: 'vm'
    })
  ;
};
