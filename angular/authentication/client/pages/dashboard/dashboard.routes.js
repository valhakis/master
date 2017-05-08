export default function routes($stateProvider, AuthRoles) {
   $stateProvider
      .state('dashboard', {
         url: '/dashboard',
         template: require('./dashboard.template.pug')(),
         data: {
            authorizedRoles: [AuthRoles.admin]
         }
      });
}
