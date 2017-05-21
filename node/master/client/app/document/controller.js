import moment from 'moment';

module.exports = function controller($scope, Document) {
   $scope.documents = [];
   $scope.currentDate = new Date();
   var date = new Date();

   $scope.day = function(i) {
      return new Date(new Date().setDate(new Date().getDate()-i));
   };
   $scope.getDate = function(i) {
      return new Date(new Date().setDate(new Date().getDate()-i));
   };

   $scope.removeDocument = function(document) {
      Document.remove(document);
      $scope.updateDocuments();
   };

   $scope.unRemoveDocument = function(document) {
      Document.unRemove(document, function() {
         $scope.updateDocuments();
      });
   };


   $scope.setDate = function(date) {
      console.log(date);
      $scope.currentDate = date;
   };

   $scope.updateDocuments = function() {
      Document.all(function(documents) {
         $scope.documents = documents;
      });
   };
   $scope.updateDocuments();
};
