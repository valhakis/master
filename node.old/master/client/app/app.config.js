import DashboardController from './controllers/dashboard.controller';

export default function config($stateProvider, $authProvider) {
   $authProvider.facebook({
      clientId: 'Facebook App ID'
   });

   $authProvider.oauth2({
      name: '',
      url: '',
      clientId: '',
      redirectUri: '',
      authorizationEndpoint: ''
   });

   $stateProvider
      .state('dashboard', {
         url: '/dashboard',
         template: require('./pages/dashboard/dashboard.view.pug')(),
         controller: DashboardController,
         controllerAs: 'DashCtrl',
         resolve: {
            auth: function resolveAuthentication(AuthResolver) {
               return AuthResolver.resolve();
            }
         }
      });
}
