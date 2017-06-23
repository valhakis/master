module.exports = function controller($scope, Note) {
   var vm = {};

   vm.notes = [];

   vm.findRemoved = function() {
      Note.findRemoved().then(function(notes) {
         vm.notes = notes;
      });
   };

   vm.removeNotePermanently = function(note) {
      Note.destroy(note).then(function() {
         vm.updateNotes();
      });
   };

   vm.updateNotes = function() {
      vm.findRemoved();
   };

   vm.findRemoved();
   return vm;
};
