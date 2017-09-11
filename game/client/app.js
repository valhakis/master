import angular from 'angular';
import Auth from './auth';

var app = angular.module('app', [Auth]);

app.config(require('./app.config'));
app.run(require('./app.run'));

export default app.name;
