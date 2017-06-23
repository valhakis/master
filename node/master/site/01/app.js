angular
  .module('app', [])
  .controller('MainController', MainController);

function MainController($http, $scope) {
  var vm = {};

  vm.country = null;

  vm.getCurrentExchangeFor = {};

  $scope.$watch('vm.getCurrentExchangeFor', function(newValue) {
    console.log(newValue);
  });

  var GetSmthing = function(year, month, day, country) {
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    $http.get(`http://api.fixer.io/${year}-${month}-${day}?symbols=${country}`).then(function(res) {
      console.log(`rates: ${res.data.rates[country]}, day: ${year}-${month}-${day}`, res.data);
      vm.getCurrentExchangeTo[day] = res.data.rates[country];
      // console.log('vm: ', vm.getCurrentExchangeFor);
      // console.log(res.data.rates);
    }, function(res) {
    });
  };

  vm.getCurrentExchangeTo = function(year, month, country) {
    var numberDayPerMonth = [ 31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30, ];

    for (var i=0; i<numberDayPerMonth.length; i++) {
      if ((i+1) == month) {
        for (var j=1; j<numberDayPerMonth[i]; j++) {
          GetSmthing(year, month, j, country);
        }
      }
    }

    /*
    for(var i = 0; i < numberDayPerMonth.length; i++){
      console.log(i);
      if((i + 1) === month){
        for(let j = 1; j < numberDayPerMonth[i]; j++){
          $http.get('http://api.fixer.io/' + year + '-0' + month + '-0' + j +'?symbols=' + vm.country).then(function (success) {
            let countryDay = vm.country;
            vm.getCurrentExchangeFor[j] = success.data.rates[countryDay];
          });
        }
      }
    }
    */
    // return vm.getCurrentExchangeFor;
  };

  vm.getCurrentExchangeTo(2005, 1, 'USD');

  return vm;
}

