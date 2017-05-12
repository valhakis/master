export default function LoginController($scope, $auth) {
   $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
   };
}
