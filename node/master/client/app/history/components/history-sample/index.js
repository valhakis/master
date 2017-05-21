import moment from 'moment';

module.exports = function HistorySampleDirective() {
   return {
      template: `
         <div class="item" ng-repeat="day in days">
            <p>{{ day }}</p>
         </div>
      `,
      controller: function($scope) {
         $scope.days = [];
         var days = [];
         var format = 'DD.MM.YYYY';

         for (var i=0; i<10; i++) {
            var day = moment().add(i, 'days').format(format);
            $scope.days.push(day);
         }

         console.log(days);
      },
      link: function() {

      }
   };
};
