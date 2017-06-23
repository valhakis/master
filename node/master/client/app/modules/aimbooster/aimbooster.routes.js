export default function AimboosterRoutes($stateProvider) {
   $stateProvider
      .state('aimbooster', {
         url: '/aimbooster',
         template: require('./aimbooster.view.pug')()
      });
}
