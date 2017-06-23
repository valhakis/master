var controller = require('./programming-language.controller');

module.exports = function(router) {
   router.get('/programming-languages', controller.all);
};
