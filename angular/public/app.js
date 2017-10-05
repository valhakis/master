var countries = [ 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Myanmar/Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Great Britain', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel and the Occupied Territories', 'Italy', 'Ivory Coast (Cote d\'Ivoire)', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyz Republic (Kyrgyzstan)', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Korea, Democratic Republic of (North Korea)', 'Norway', 'Oman', 'Pacific Islands', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent\'s & Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic (Slovakia)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Korea, Republic of (South Korea)', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United States of America (USA)', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe', ];

var app = angular.module('app', ['chart.js']);

var httpDefaultError = function(res) {
  console.log(res.data);
};

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

app.controller('built-in-services', function($scope, $location, $http, $timeout, $interval) {
  $scope.url = $location.absUrl();
  $http.get('/angular/anomaly').then(function success(res) {
    $scope.result = res.data;
  });
  $timeout(function() {
    $scope.timeoutResult = 'SORRY FOR THE WAIT';
  }, 5000);
  $interval(function() {
    $scope.intervalText = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567800';
    for (var i=0; i<Math.floor(Math.random() * 100); i++) {
      $scope.intervalText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }, 1000);
});

app.service('valhakis', function() {
  this.join = function(name) {
    return name + ' Valhakis';
  };
});

app.filter('valhakis', function(valhakis) {
  return function(input) {
    return valhakis.join(input);
  };
});

app.controller('custom-service', function($scope, valhakis) {
  $scope.name = valhakis.join('Robert');
});

app.controller('http', function($scope, $http) {
  $http.get('/angular/brilliant').then(function success(res) {
    $scope.brilliant = res.data;
  });
  $http.post('/angular/brilliant').then(function success(res) {
    $scope.brilliantPostResult = res.data;
  });
  $http.put('/angular/brilliant').then(function success(res) {
    $scope.brilliantPutResult = res.data;
  });
  $http.patch('/angular/brilliant').then(function success(res) {
    $scope.brilliantPatchResult = res.data;
  });
  $http.delete('/angular/brilliant').then(function success(res) {
    $scope.brilliantDeleteResult = res.data;
  });
});

app.controller('name-generator', function($scope, $http) {
  $scope.name = '';

  $scope.generateName = function() {
    $http.get('/angular/generator/name').then(function success(res) {
      if ($scope.name == res.data) {
        $scope.generateName();
      } else {
        $scope.name = res.data;
      }
    });
  };

  $scope.generateName();
});

app.controller('address-generator', function($scope, $http) {
  $scope.address = '';

  $scope.generateAddress = function() {
    $http.get('/angular/generator/address').then(function success(res) {
      if ($scope.address == res.data) {
        $scope.generateAddress();
      } else {
        $scope.address = res.data;
      }
    });
  };

  $scope.generateAddress();
});

app.controller('customers', function($scope, $http) {
  $scope.order = '';
  $scope.customers = [];

  $scope.findCustomers = function() {
    $http.get('/angular/static/customers').then(function success(res) {
      $scope.customers = res.data;
    });
  };

  $scope.refresh = function() {
    $scope.findCustomers();
  };

  $scope.orderBy = function(order) {
    $scope.order = order;
  };

  $scope.findCustomers();
});

app.controller('customer', function($scope, $http) {

  $scope.customers = [];
  $scope.customer = {};

  $scope.addCustomer = function(customer) {
    $http.post('/angular/customers', customer).then(function success(res) {
      $scope.resetCustomer();
    });
  };

  $scope.resetCustomer = function() {
    $scope.customer = {
      name: '',
      address: ''
    };
  };

  $scope.updateCustomers = function() {
    $scope.allCustomers();
  };

  $scope.allCustomers = function() {
    $http.get('/angular/customers').then(function success(res) {
      $scope.customers = res.data;
    });
  };

  $scope.customerListInsert = function() {
    var customers = [
      { name: 'Ben	Pearson',   address: '7438 SE. Manchester Court Monroe, NY 10950', },
      { name: 'Scott	Ward',    address: '6 Sutor Dr. Cleveland, TN 37312', },
      { name: 'Kate	Jackson',   address: '1 Brown St. Fuquay Varina, NC 27526', },
      { name: 'Clay	Chambers',  address: '46 Lafayette St. Brighton, MA 02135', },
      { name: 'Antonio Shaw',   address: '8 High Noon Ave. Niles, MI 49120' },
    ];
    customers.forEach(function(customer) {
      $scope.addCustomer(customer);
    });
  };

  $scope.resetCustomer();
  $scope.allCustomers();
});

app.controller('employee', function($scope, $http) {
  $scope.employees = [];

  $scope.findAllEmployees = function() {
    $http.get('/angular/employees').then(function success(res) {
      $scope.employees = res.data;
    });
  };

  $scope.findAllEmployees();
});

app.controller('user', function($scope, $http) {
  $scope.user = {};
  $scope.users = [];

  $scope.resetUser = function() {
    $scope.user = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  };

  $scope.fetchUsers = function() {
    $http.get('/angular/users').then(function success(res) {
      $scope.users = res.data;
    }, httpDefaultError);
  };

  $scope.addUser = function(user) {
    $http.post('/angular/users', user).then(function success(res) {
      $scope.resetUser();
    }, httpDefaultError);
  };

  $scope.dropUsersTable = function() {
    $http.delete('/angular/users/drop', function success(res) {
      console.log(res.data);
    }, httpDefaultError);
  };

  $scope.fetchUsers();
  $scope.resetUser();
});

app.controller('pie-chart', function($scope, $http) {
  Promise.all([
    $http.get('/angular/customers'),
    $http.get('/angular/employees'),
    $http.get('/angular/users'),
  ]).then(values => {
    $scope.data = [];
    $scope.labels = ['Customers', 'Employees', 'Users'];
    $scope.data[0] = values[0].data.length;
    $scope.data[1] = values[1].data.length;
    $scope.data[2] = values[2].data.length;
  });
});
