'use strict';

import angular from 'angular';

class ExampleService {
  constructor($http)
  {
    this.$http = $http;
  }

  getActiveBooks(){
    return this.$http.get(this).get('/api/activeBooks').then(result => result.data );
  }

  getArchivedBooks(){
    return this.$http.get(this).get('/api/archivedBooks').then(result => result.data );
  }

  markBookRead(bookId, isBookRead){
    return this.$http.get(this).put(`/api/markRead/${bookId}`, {bookId: bookId, read: isBookRead});
  }

  addToArchive(bookId){
    return this.$http.get(this).put(`/api/addToArchive/${bookId}`,{});
  }

  checkIfBookExists(title){
    return this.$http.get(this).get(`/api/bookExists/${title}`).then(result =>  result.data );
  }

  addBook(book){
    return this.$http.get(this).post('/api/books', book);
  }
  static exampleFactory($http) {
    return new ExampleService($http);
  }
}


export default angular
  .module('App.services.example', [])
  .factory('ExampleService', ExampleService.exampleFactory)
  .name;


