module.exports = function SnippetService($http) {
   var service = {};

   service.save = function(snippet) {
      console.log(snippet);
      return $http.put(`/api/snippets/${snippet._id}`, snippet).then(function(res) {
         return res.data;
      });
   };

   service.all = function(callback) {
      $http.get('/api/snippets').then(function(res) {
         if (callback) callback(res.data);
      });
   };

   service.create = function(snippet, callback) {
      $http.post('/api/snippets', snippet).then(function(res) {
         if (callback) callback(res.data);
      });
   };

   service.remove = function(snippetId) {
      return $http.delete(`/api/snippets/${snippetId}`).then(function(res) {
         return res.data;
      });
   };

   service.getSnippet = function(_id) {
      return service.getAllSnippets().then(function(snippets) {
         return snippets.find(function(snippet) {
            return snippet._id === _id;
         });
      });
   };

   service.getAllSnippets = function() {
      return $http.get('/api/snippets').then(function(res) {
         return res.data;
      });
   };

   return service;
};
