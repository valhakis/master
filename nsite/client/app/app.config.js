module.exports = function app_config($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: `
      <h3>hello world!</h3>
      <hello></hello>
    `
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state('products', {
    url: '/products',
    template: require('./pages/products/index.html')
  });

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
};
