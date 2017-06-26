import './styles/index.scss';

import angular from 'angular';
import codemirror from 'codemirror';
import 'codemirror/keymap/vim';

var mod = angular.module('app.sequelize', []);

mod.config(function config($stateProvider) {
  $stateProvider
    .state('sequelize', {
      url: '/sequelize',
      template: require('./views/index.html'),
      controller: MainController,
      controllerAs: 'main'
    })
  ;
});

mod.directive('sequelizeEditor', function() {
  return {
    template: `<textarea class="textarea"></textarea>`,
    link: function(scope, elem, attrs) {
      var textarea = elem[0].querySelector('.textarea');
      var options = {
        lineNumbers: true,
        keyMap: 'vim'
      };
      var editor = codemirror.fromTextArea(textarea, options);
    }
  };
});

export default mod.name;


function MainController($http) {
  var vm = {};

  function error(res) {
    console.log(res.data);
  }

  $http.get('/db1/codes').then(function(res) {
    console.log(res.data);
  }, error);

  return vm;
}
