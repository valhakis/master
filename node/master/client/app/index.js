import './app.scss';

import 'angular-ui-router/release/stateEvents.js';

import 'json-formatter/src/jsonFormatter';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage';
import ngLocalStorage from 'angular-local-storage';
import satellizer from 'satellizer';

import Modules from './modules';
import Aimbooster from './modules/aimbooster';
import Mongoose from './pages/mongoose';
import AuthJwt from './auth-jwt';
import Tasks from './tasks';
import Auth from './auth';
import Blog from './blog';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Tutorial from './tutorial';
import Home from './pages/home';
import ColorBox from './components/color-box';

import LiteServerService from './services/lite-server.service';

import AppConfig from './app.config';
import AppRun from './app.run';

var app = angular.module('app', [
    /* 'ui.router',*/ 'ui.router.state.events', 'satellizer', /* 'jsonFormatter' ,*/ /* 'LocalStorageModule' , */
   uiRouter, 'ngStorage', satellizer, ngLocalStorage,
   Home, Auth, AuthJwt, Blog, Tutorial, Tasks, Mongoose, Aimbooster,
   Navbar, Footer, ColorBox, Modules
]);

app.run(AppRun);
app.config(AppConfig);

import LoginController from './controllers/login.controller';
app.controller('LoginController', LoginController);
app.factory('LiteServer', LiteServerService);

export default app;
