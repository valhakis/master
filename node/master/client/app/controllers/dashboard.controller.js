export default function DashboardController($scope, $http, $interval, LiteServer, Project01Service) {

   // LITE-SERVER
   $scope.lite = {};
   $scope.lite.open = false;
   $scope.lite.startClass = function() {
      return {'w3-disabled': LiteServer.open};
   };
   $scope.lite.stopClass = function() {
      return {'w3-disabled': !LiteServer.open};
   };
   $scope.lite.statusClass = function() {
      return {'w3-green': LiteServer.open, 'w3-red': !LiteServer.open};
   };
   $scope.lite.openClass = function() {
      return {'w3-disabled': !LiteServer.open};
   };
   $scope.lite.start = function() {
      LiteServer.start(function() {
      });
   };
   $scope.lite.stop = function() {
      LiteServer.stop(function() {
      });
   };
   $scope.lite.open = function() {
      window.open('http://192.168.0.2:3100', '_blank');
   };
   // PROJECT 01 
   $scope.project01 = {};
   $scope.project01.isOpen = false;
   $scope.project01.start = function() {
      $http.post('/api/projects/01/start').then(function(res) {
      });
   };
   $scope.project01.stop = function() {
      $http.post('/api/projects/01/stop').then(function(res) {
      });
   };
   $scope.project01.status = function() {
      $http.post('/api/projects/01/status').then(function(res) {
         $scope.project01.isOpen = res.data.open;
      });
   };
   $scope.project01.open = function() {
      window.open('http://192.168.0.2:3200', '_blank');
   };
   $interval(function() {
      $scope.project01.status();
   }, 1000);

   // REST OF SOMETHING
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
      });
   };

   this.setLiteserverStatusInterval = () => {

   };

   this.start = () => {
      $http.get('/api/example/start')
         .then((res) => {
         });
   };

   this.stop = () => {
      $http.get('/api/example/stop')
         .then((res) => {
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
