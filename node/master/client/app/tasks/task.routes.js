import TaskController from './controllers/task.controller';

export default function routes($stateProvider) {
   $stateProvider
      .state('tasks', {
         url: '/tasks',
         template: require('./task.view.pug')(),
         controller: TaskController,
         controllerAs: 'TaskCtrl',
         redirectTo: 'tasks.list'
      })
      .state('tasks.new', {
         url: '/new',
         template: require('./partials/new.view.pug')()
      })
      .state('tasks.list', {
         url: '/list',
         template: require('./partials/list.view.pug')()
      })
      .state('tasks.removed', {
         url: '/removed',
         template: require('./partials/removed.view.pug')()
      });
}
