var StoryController = GET.require('controllers/story.controller');

module.exports = function(app) {
   app.use('/stories', StoryController.middleware);
   app.post('/stories/authenticate', StoryController.authenticate);
   app.get('/stories', StoryController.renderIndex);
   app.post('/stories', StoryController.create);
};
