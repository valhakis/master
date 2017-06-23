module.exports = function controller($scope, Note) {
   $scope.note = {};
   $scope.notes = [];

   $scope.resetNote = function() {
      $scope.note = {
         title: '',
         content: ''
      };
   };

   $scope.findRemoved = function() {
      Note.findRemoved().then(function(notes) {
         $scope.notes = notes;
      });
   };

   $scope.createNote = function(note) {
      Note.create(note).then(function(note) {
         $scope.updateNotes();
         $scope.resetNote();
      });
   };

   $scope.removeNote = function(note) {
      Note.remove(note).then(function(note) {
         $scope.updateNotes();
      });
   };

   $scope.updateNotes = function() {
      Note.findAll().then(function(notes) {
         $scope.notes = notes;
      });
   };

   $scope.resetNote();
   $scope.updateNotes();
};
