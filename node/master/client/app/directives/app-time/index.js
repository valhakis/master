import './style.scss';
import angular from 'angular';
import moment from 'moment';
require('moment-timezone/builds/moment-timezone-with-data.js');

export default angular
   .module('directives.appTime', [])
   .directive('appTime', function($interval) {
      return {
         template: 'app-time',
         controller: function() {

         },
         link: function(scope, element, attributes) {
            var intervalId = null;
            var timezone = moment.tz.guess();
            var format = 'HH:mm:ss | dddd | D. MMM | D.M.YYYY';
            function update() {
               element.text(moment().format(format) + ' | ' + timezone);
            }
            update();
            intervalId = $interval(update, 1000);
            element.on('$destroy', function() {
               $interval.cancel(intervalId);
            });
         }
      };
   })
   .name;
