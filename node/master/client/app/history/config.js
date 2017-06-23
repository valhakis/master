export default function config($stateProvider) {
   $stateProvider
      .state('history', {
         url: '/history',
         template: require('./template.pug')(),
         redirectTo: 'history.list'
      })
      .state('history.single', {
         url: '/history/{historyId}',
         template: require('./single/template.pug')(),
         controller: require('./single/controller'),
         resolve: {
            history: function($http, $transition$) {
               var historyId = $transition$.params().historyId;
               function success(res) {
                  return res.data;
               }
               return $http.get(`/api/histories/${historyId}`).then(res => {
                  return res.data;
               });
            }
         }
      })
      .state('history.create', {
         url: '/create',
         template: require('./create/template.pug')(),
         controller: require('./create/controller')
      })
      .state('history.list', {
         url: '/list',
         template: require('./list/template.pug')(),
         controller: require('./list/controller')
      })
   ;
}
