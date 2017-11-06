module.exports = function main_module_routes($stateProvider) {
  var states = [{
    name: 'main',
    url: '/main',
    template: require('./template.html'),
  }];
  states.forEach(state => {
    $stateProvider.state(state);
  });
};
