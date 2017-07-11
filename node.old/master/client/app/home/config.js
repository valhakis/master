export default function config($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./template.pug'),
         controller: require('./controller')
      });
}
