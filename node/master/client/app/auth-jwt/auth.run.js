export default function run($rootScope, $http, $localStorage, $location) {

   if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
      $rootScope.currentUser = $localStorage.currentUser;
   }

   $rootScope.$on('$locationChangeStart', function(event, next, current) {
      //var publicPages = ['/login'];
      //var restrictedPage = publicPages.indexOf($location.path()) === -1;
      //if (restrictedPage && !$localStorage.currentUser) {
         //$location.path('/login');
      //}
   });

   var testUser = {
      email: 'ruudi170@gmail.com',
      password: 'newbeginning'
   };
   /*
   $httpBackend
      .whenPOST('/api/authenticate')
      .respond(function(method, url, data) {
         var params = angular.fromJson(data);
         console.log(params);
         if (params.email === testUser.email && params.password === testUser.password) {
            return [200, { token: 'fake-jwt-token' }, {}];
         } else {
            return [200, {}, {}];
         }
      });
   */
}
