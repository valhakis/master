import './app.scss';

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

import AppConfig from './app.config';
import AppRun from './app.run';

var app = angular.module('app', [
   'ui.router', 'ui.router.state.events', 'satellizer', 'jsonFormatter', 'LocalStorageModule',
   Home, Auth, AuthJwt, Blog, Tutorial, Tasks, Mongoose, Aimbooster,
   Navbar, Footer, ColorBox
]);

app.run(AppRun);
app.config(AppConfig);

import LoginController from './controllers/login.controller';
app.controller('LoginController', LoginController);

export default app;
