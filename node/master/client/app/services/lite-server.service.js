export default function LiteServerService($http, $timeout, $interval) {
   var service = {};

   service.open = false;
   service.intervalId = null;

   service.start = (callback) => {
      $http.post('/api/lite-server/start', {})
         .then((res) => {
            console.log(res.data);
         }, (res) => {
            console.log(res.data);
         });
      callback();
   };

   service.stop = (callback) => {
      $http.post('/api/lite-server/stop', {})
         .then((res) => {
            console.log(res.data);
         }, (res) => {
            console.log(res.data);
         });
      callback();
   };

   service.status = (callback) => {
      $http.post('/api/lite-server/status', {})
         .then((res) => {
            callback(res.data);
            console.log(res.data);
         }, (res) => {
            console.log(res.data);
         });
   };

   (() => {
      service.intervalId = $interval(() => {
         $http.post('/api/lite-server/status', {})
            .then((res) => {
               service.open = res.data.open;
            }, (res) => {
               console.log(res.data);
            });
      }, 1000);
   })();

   return service;
}
