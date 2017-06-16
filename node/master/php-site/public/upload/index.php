<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body ng-app="">

<form id="form" action="" method="POST" ng-data-init="products=[0, 1]">
  <div ng-repeat="product in [0, 1, 2]">
    <label>Product</label>
    <input type="text" name="products[]">
  </div>
</form>

<script src="/angular/angular.js"></script>
</body>
</html>
