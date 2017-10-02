var countries = [ 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Myanmar/Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Great Britain', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel and the Occupied Territories', 'Italy', 'Ivory Coast (Cote d\'Ivoire)', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyz Republic (Kyrgyzstan)', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Korea, Democratic Republic of (North Korea)', 'Norway', 'Oman', 'Pacific Islands', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent\'s & Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic (Slovakia)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Korea, Republic of (South Korea)', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United States of America (USA)', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe', ];

var app = angular.module('app', []);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('<%');
  $interpolateProvider.endSymbol('%>');
});

app.controller('brilliant', function($scope) {
  $scope.fname = 'William';
  $scope.lname = 'Valhakis';
});

app.directive('minimalist', function() {
  return {
    template: `
      <p><b>Minimalist</b> prefers the minimal amount of anything.</p>
      <p><% name %> is not a minimalist, I'm most sure about that.</p>
    `
  };
});

app.controller('country', function($scope) {
  $scope.countries = countries;
});

app.controller('keyword', function($scope) {
  $scope.keywords = [
    'directive', 'session', 'filter', '$scope', '$rootScope', 'ng-model', 'ng-controller', '$http', 'attribute', 'comment', 'class', 'restrict', 'E A M C', 'template', 'validate', '$valid', '$dirty', '$touched'
  ];
});

app.controller('directive', function($scope) {
  $scope.name = 'Melissa';
});

app.directive('directiveDefault', function() {
  return {
    template: `
      <p>THIS IS DEFAULT DIRECTIVE</p>
      <p><small>Name: <% name %></small></p>
    `
  };
});

app.directive('appElementDirective', function() {
  return {
    restrict: 'E',
    template: `
      <p>THIS TEMPLATE IS AS ELEMENT</p>
      <p><small>Name: <% name %></small></p>
    `
  };
});

app.directive('appClassDirective', function() {
  return {
    restrict: 'C',
    controller: function($scope) {
      $scope.name = 'Annabella';
    },
    template: `
      <p>THIS DIRECTIVE IS AS CLASS</p>
      <p><small>Name: <% name %></small></p>
    `,
  };
});

app.directive('appAttributeDirective', function() {
  return {
    restrict: 'A',
    template: `
      <p>THIS DIRECTIVE IS AS ATTRIBUTE</p>
      <p><small>Name: <% name %></small></p>
    `
  };
});

app.directive('appCommentDirective', function() {
  return {
    restrict: 'M',
    replace: true,
    template: `
      <div>
        <p>THIS DIRECTIVE IS AS COMMENT</p>
        <p><small>Name: <% name %></small></p>
      </div>
    `
  };
});

app.controller('validate', function($scope) {
  $scope.name = 'Maximus';
});

app.controller('click', function($scope) {
  $scope.name = 'Augustina Hamisi';
  $scope.changeName = function(newName) {
    $scope.name = newName;
  };
});

app.controller('names', function($scope) {

  $scope.names = [
    { fname: 'Jordyn', lname: 'Meadows' },
    { fname: 'Estrella', lname: 'Osborne' },
    { fname: 'Deandre', lname: 'Mcfarland' },
    { fname: 'Caitlyn', lname: 'Savage' },
    { fname: 'Lydia', lname: 'Farley' },
    { fname: 'Bryce', lname: 'Ali' },
    { fname: 'Amaya', lname: 'Waters' },
    { fname: 'Van', lname: 'Russo' },
    { fname: 'Stephanie', lname: 'Maldonado' },
    { fname: 'Jada', lname: 'Christian' },
    { fname: 'Skyla', lname: 'Hart' },
    { fname: 'Kody', lname: 'Cannon' },
  ];

});

app.controller('filter', function($scope) {
  $scope.persons = [
    { id: 3, name: 'Carlton Douglas' },
    { id: 2, name: 'Elmer	Roberson' },
    { id: 1, name: 'Antonio	Shaw' },
    { id: 6, name: 'Don	Cole' },
    { id: 5, name: 'Beatrice	Mcgee' },
    { id: 4, name: 'Fausto	Dozier' },
  ];
});

app.controller('interactive', function($scope) {
  $scope.persons = [
    { id: 3, name: 'Carlton Douglas', country: 'estonia' },
    { id: 2, name: 'Elmer	Roberson', country: 'latvia' },
    { id: 1, name: 'Antonio	Shaw', country: 'england' },
    { id: 6, name: 'Don	Cole', country: 'sweden' },
    { id: 5, name: 'Beatrice	Mcgee', country: 'norway' },
    { id: 4, name: 'Fausto	Dozier', country: 'england' },
  ];
});

app.filter('red', function() {
  return function(input) {
    return ' RED ' + input + ' RED ';
  };
});

app.controller('custom-filter', function($scope) {
  $scope.name = 'Robert Valhakis';
});
