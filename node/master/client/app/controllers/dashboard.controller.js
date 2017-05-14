export default function DashboardController($http, $interval, LiteServer) {
   this.statusInterval = null;
   this.open = false;
   this.liteServerOpen = false;

   this.startLiteServer = () => {
      LiteServer.start(function() {

      });
   };

   this.stopLiteServer = () => {
      LiteServer.stop(function() {

      });
   };

   this.liteServerStartClass = () => {
      return {'w3-disabled': LiteServer.open};
   };

   this.liteServerStopClass = () => {
      return {'w3-disabled': !LiteServer.open};
   };

   this.liteServerStatusClass = () => {
      return {'w3-green': LiteServer.open, 'w3-red': !LiteServer.open};
   };
   this.liteServerOpenInTabClass = () => {
      return {'w3-disabled': !LiteServer.open};
   };

   this.liteServerStatus = () => {
      LiteServer.status((response) => {
         this.liteServerOpen = response.open;
         if (response.open) {
            console.log(`LITE-SERVER IS RUNNING.`);
         } else {
            console.log(`LITE-SERVER IS NOT RUNNING.`);
         }
      });
   };

   this.setLiteserverStatusInterval = () => {

   };

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
