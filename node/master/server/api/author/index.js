
module.exports = function(router) {
   var controller = require('./controller');
   router.get('/authors', controller.allAuthors);
};

