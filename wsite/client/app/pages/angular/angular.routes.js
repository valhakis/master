module.exports = function($stateProvider) {
  var states = [{
    name: 'angular.boxen_one',
    url: '/boxen_one',
    template: require('./boxen/boxen-one/template.html'),
    controller: require('./boxen/boxen-one/controller'),
  },{
    name: 'angular.boxen_two',
    url: '/boxen_two',
    template: 'THE BOXEN TWO TEMPLATE',
  },{
    name: 'angular.boxen_three',
    url: '/boxen_three',
    template: 'THE BOXEN THREE TEMPLATE',
  }];
  states.forEach(state => {
    $stateProvider.state(state);
  });
};
