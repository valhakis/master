var demo = angular.module('demo', []);

var SheetJSImportDirective = function() {
  return {
    scope: { },
    link: function ($scope, $elm, $attrs) {
      $elm.on('change', function (changeEvent) {
        var reader = new FileReader();

        reader.onload = function (e) {
          /* read workbook */
          var bstr = e.target.result;
          var workbook = XLSX.read(bstr, {type:'binary'});

          /* DO SOMETHING WITH workbook HERE */
        };

        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
    }
  };
};

demo.directive("importSheetJs", [SheetJSImportDirective]);
