module.exports = function TutorialFactory($http) {
   var factory = {};

   var handleError = function(res) {
      console.log(res.data);
   };

   factory.remove = function(tutorial) {
      return $http.delete(`/api/tutorials/${tutorial._id}`).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.destroy = function(tutorial) {
      return $http.delete(`/api/tutorials/${tutorial._id}?destroy=true`).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.recover = function(tutorial) {
      return $http.put(`/api/tutorials/${tutorial._id}/recover`).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.findById = function(tutorialId) {
      return $http.get(`/api/tutorials/${tutorialId}`).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.findRemoved = function() {
      return $http.get('/api/tutorials?removed=true').then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.findAll = function() {
      return $http.get('/api/tutorials').then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.create = function(tutorial) {
      return $http.post('/api/tutorials', tutorial).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.single = function(tutorialId) {
      return $http.get(`/api/tutorials/${tutorialId}`).then(function(res) {
         return res.data;
      }, handleError);
   };

   factory.createCode = function(tutorialId, code) {
      return $http.post(`/api/tutorials/${tutorialId}/codes`, code).then(function(res) {
         return res.data;
      }, handleError);
   };

  factory.findCodeById = function(tutorialId, codeId) {
    return $http.get(`/api/tutorials/${tutorialId}/codes/${codeId}`).then(function(res) {
      return res.data;
    }, handleError);
  };

  factory.updateCode = function(tutorialId, code) {
    return $http.put(`/api/tutorials/${tutorialId}/codes/${code._id}`, code).then(function(res) {
      return res.data;
    }, handleError);
  };

  factory.createNote = function(tutorialId, note) {
    return $http.post(`/api/tutorials/${tutorialId}/notes`, note).then(function(res) {
      return res.data;
    }, handleError);
  };

  factory.removeCode = function(tutorialId, codeId) {
    return $http.delete(`/api/tutorials/${tutorialId}/codes/${codeId}`).then(function(res) {
      return res.data;
    }, handleError);
  };

   return factory;
};
