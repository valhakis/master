import angular from 'angular';

module.exports = function() {
   return function(items, optional1) {
      var filtered = [];
      angular.forEach(items, function(item) {
         if (item[optional1] !== null) {
            filtered.push(item);
         }
      });
      return filtered;
      /*
      console.log(optional1, optional2);
      angular.forEach(object, function(value, key) {
         if (value !== null) {
            if (typeof(value) === 'object') {
               if (Obj.keys(value).lenght > 0) {

               }
            }
         }
      });
      */

      /*
      for (var i=0; i<objects.length; i++) {
         if (objects[i].createdAt !== null) {
            delete objects[i];
         }
         //objects[i].text = `EXAMPLE TITLE ${i}.`;
      }
      */
      

      //return objects;
   };
};
