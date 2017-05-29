/* global io */

var app = angular.module('app', []);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('<%').endSymbol('%>');
});

app.run(function($rootScope, socket) {

});

function MainController($scope, socket) {
  var main = {};

  socket.socket.on('initialize', function(data) {
    $scope.posts = data.posts;
    console.log('SCOPE POSTS: ', $scope.posts);
  });

  return main;
}

function PostFactory() {
  var post = {};
  
  return post;
}

function SocketFactory() {
  var service = {};

  service.posts = [];

  service.socket = io();

  service.socket.on('initialize', function(data) {
    console.log(data);
    service.posts = data.posts;
  });

  console.log('SOCKET FACTORY HAS RAN');

  return service;
}

app.controller('MainController', MainController);
app.factory('Post', PostFactory);
app.factory('socket', SocketFactory);

// var socket = io();

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var post = {
    title: this.elements.title.value,
    content: this.elements.content.value
  };

  /*
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/addpost');
  xhr.send(JSON.stringify(post));
  */

  // socket.emit('addpost', post);

  this.elements.title.value = '';
  this.elements.content.value = '';

}, false);

// socket.on('welcome', function() {
  // console.log('A NEW USER CONNECTED');
// });

// socket.on('posts', function(posts) {
  // console.log('I HAVE TO GET POSTS', posts);
// });
