import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import Auth from './auth';
import Tutorial from './tutorial';
import Source from './source';

var app = angular.module('app', [uiRouter, Source, Tutorial]);

app.config(require('./app.config'));
app.run(require('./app.run'));

app.controller('AuthController', function AuthController() {

});

export default app.name;
