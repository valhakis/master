module.exports = function RunService($http) {
   var service = {};

   var successHandler = function(res) {
      console.log(res.data);
   };
   var errorHandler = function(res) {
      console.log(res.data);
   };
   
   service.run = function(code, type) {

      $http.post('/api/run', {
         type: 'node',
         code: code
      }).then(successHandler, errorHandler);

      return new Promise(function(resolve, reject) {
         if (type !== 'node') {
            return reject({message: `Currently only 'node' type is allowed.`});
         }
         resolve({ message: 'I have to execute the following code', code: code });
      });

   };

   return service;
};
