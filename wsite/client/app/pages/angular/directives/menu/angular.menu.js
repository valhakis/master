var app = require('root/app');

app.directive('angularMenu', function angular_menu_directive() {
  return {
    template: require('./angular.menu.template.html')
  }
});
