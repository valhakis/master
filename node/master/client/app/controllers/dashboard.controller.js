export default function DashboardController($http, $interval) {
   this.statusInterval = null;
   this.open = false;

   this.start = () => {
      $http.get('/api/example/start')
         .then((res) => {
            console.log(res.data);
         });
   };

   this.stop = () => {
      $http.get('/api/example/stop')
         .then((res) => {
            console.log(res.data);
         });
   };

   this.status = () => {
      $http.get('/api/example/status')
         .then((res) => {
            if (res.data.open) {
               this.open = true;
            } else {
               this.open = false;
            }
            console.log(res.data);
         });
   };

   this.setStatusInterval = () => {
      this.statusInterval = $interval(() => {
         $http.get('/api/example/status')
            .then((res) => {
               if (res.data.open) {
                  this.open = true;
               } else {
                  this.open = false;
               }
            }, (res) => {

            });
      }, 1000);
   };

   (()=> {
      this.setStatusInterval();
   })();
}
