/* global angular */

angular.module('app', [])
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      $scope.arr = [
        {name: "XXXXXX"},
        {name: "YYYYYY"},
        {name: "ZZZZZZ"},
        {name: "OOOOOO"}
      ];
    }
  ])
  .directive('bindStringModel', [
    '$compile',
    function ($compile) {
      return {
        compile: function (el, attr) {
          el[0].removeAttribute('bind-string-model');
          return function (scope) {
            var stringBinding = attr.bindStringModel;
            var tagName = el[0].nodeName.toLowerCase();
            var tagType = el[0].type ? el[0].type.toLowerCase() : "unknown";
            var scopeBinding = scope.$eval(stringBinding);

            if (scopeBinding !== undefined) {

              if (angular.isArray(scopeBinding)) {

                el[0].setAttribute('bind-string-array-model', stringBinding);

              } else {
                if (tagName === "input" || tagName === "select" || tagName === "textarea") {

                  if (tagType === "checkbox" || tagType === "radio") {
                    el[0].setAttribute('ng-checked', scopeBinding);
                  } else {
                    el[0].setAttribute('ng-model', scopeBinding);
                  }
                } else {
                  el[0].innerHTML = scopeBinding;
                }
              }
            } else {
              if (tagName === "input" || tagName === "select" || tagName === "textarea") {
                el[0].setAttribute('value', stringBinding);
              } else {
                el[0].innerHTML = stringBinding;
              }
            }

            $compile(el[0])(scope);
          };
        }
      };
    }
  ])
  .directive('bindStringArrayModel', [
    '$compile',
    function ($compile) {
      return {
        compile: function (el, attr) {
          var stringArrayBinding = attr.bindStringArrayModel;
          var index = attr.index ? attr.index : "i";
          var alias = attr.alias ? attr.alias : "item";
          el[0].removeAttribute('bind-string-array-model');
          el[0].setAttribute('ng-repeat', "(" + index + "," + alias + ") in " + stringArrayBinding);
          var compile = $compile(el[0]);

          return function (scope) {
            compile(scope);
          };
        }
      };
    }
  ]);

