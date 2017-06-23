export default function routes($stateProvider) {
   $stateProvider.state('tutorial.handsontable', {
      url: '/handsontable',
      template: require('./views/handsontable.view.pug')()
   });
}
