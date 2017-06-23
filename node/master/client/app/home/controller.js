module.exports = function controller($scope, Note) {
   $scope.notes = [];

   $scope.updateNotes = function() {
      Note.findAll().then(function(notes) {
         $scope.notes = notes;
      });
   };

   $scope.updateNotes();
};
