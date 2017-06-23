/* global angular */

// urunler -> products
// urunGetir -> getProduct
// gorsel -> image

var app = angular.module('app', ['ui.router']);

app.controller('MainController', MainController);
app.controller('AppController', AppController);

function MainController($scope, $stateParams, $http) {
  $scope.products = [];

  $scope.getProducts = function() {
    return $http.get('http://www.elli2.com/mobil/urunler').then(function(res) {
      return res.data;
    });
  };

  $scope.getImage = function(id) {
    return $http.get('http://www.elli2.com/mobil/urunGorsel/' + id).then(function(res) {
      return res.data;
    });
  };

  /*
  $scope.getProducts().then(function(products) {
    $scope.products = products;

    var url = 'http://www.elli2.com/img_gorsel_/urunler/';

    $scope.products.forEach(function(product) {
      $scope.getImage(product.urun_id).then(function(image) {
        product.image_url = url + image.urun_gorsel;
      });
    });

    console.log('PRODUCT:',products[0]);
  });
  */

}


function AppController($scope, $http) {
  $scope.urunler = []; // products

  function handleError(res) {
    console.log(res.data);
  }

  $scope.urunGetir = function() { // get products
    return $http.get('http://www.elli2.com/mobil/urunler').then(function(res) {
      return res.data;
    }, handleError);
  };

  $scope.gorselGetir = function(urun_id) { // get image ?
    return $http.get('http://www.elli2.com/mobil/urunGorsel/' + urun_id).then(function(res) {
      return res.data;
    }, handleError);
  };

  $scope.urunGetir().then(function(urunler) { // init get products
    $scope.urunler = urunler;

    // initialize each products image url
    $scope.urunler.forEach(function(urun) {
      // urun -> product ?
      $scope.gorselGetir(urun.urun_id).then(function(gorsel) {
        urun.gorsel_url = 'http://www.elli2.com/img_gorsel_/urunler/' + gorsel.urun_gorsel;
      });
    });
  });
}
