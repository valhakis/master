module.exports = function run($rootScope) {
  $rootScope.state = 'index';
  $rootScope.setState = function setState(state) {
    $rootScope.state = state;
  };
  $rootScope.isState = function(state) {
    return state == $rootScope.state;
  };
};
