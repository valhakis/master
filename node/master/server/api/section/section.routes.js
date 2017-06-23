var controller = require('./section.controller');

module.exports = function(router) {
   router.get('/sections', controller.all);
   router.post('/sections', controller.create);
   router.delete('/sections/:sectionId', controller.remove);
};


