module.exports = function config($stateProvider) {
   $stateProvider
      .state('exercise', {
         url: '/exercise',
         template: require('./template.pug')(),
         redirectTo: 'exercise.index'
      })
      .state('exercise.index', {
         url: '/index',
         template: require('./index/template.pug')(),
      })
      .state('exercise.create', {
         url: '/create',
         template: require('./create/template.pug')(),
      })
   ;
};
