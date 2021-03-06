import 'w3-css/w3.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './config';

import OrderObjectBy from './filters/order-object-by';

import Home from './home';
import About from './about';
import Todo from './todo';
import Navbar from './components/app-navbar';

var firebase = require('firebase/app');
// require('firebase/auth'); ...

// Initialize Firebase
firebase.initializeApp({
   apiKey: "AIzaSyBsrrj0AJPUMJdAsbDwGpjXUommGARsX3A",
   authDomain: "master-708eb.firebaseapp.com",
   databaseURL: "https://master-708eb.firebaseio.com",
   projectId: "master-708eb",
   storageBucket: "master-708eb.appspot.com",
   messagingSenderId: "710566805426"
});

angular
   .module('app', [
      uiRouter, 
      Home, About, Todo,
      Navbar,
      OrderObjectBy
   ])
   .constant('api', 'https://master-708eb.firebaseio.com')
   .config(config)
;
