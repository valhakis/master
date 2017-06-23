module.exports = function NodeFactory($http) {

  var handleError = function(res) {
    console.log(res.data);
    // return res;
  };

  var factory = {
    create: function(node) {
      return $http.post('/api/nodes', node).then(res => {
        return res.data;
      }, handleError);
    },
    findAll: function() {
      return $http.get('/api/nodes').then(res => {
        return res.data;
      }, handleError);
    }
  };

  return factory;
};
