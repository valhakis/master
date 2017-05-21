var express = require('express');
var router = express.Router();

require('./lite-server')(router);
require('./kitten')(router);
require('./tutorial')(router);
require('./project')(router);
require('./code')(router);
require('./author')(router);
require('./example')(router);

require('./auth/auth.routes')(router);
require('./user/user.routes')(router);
require('./post/post.routes')(router);
require('./task/task.routes')(router);
require('./todo/todo.routes')(router);
require('./section/section.routes')(router);
require('./programming-language/programming-language.routes')(router);

module.exports = function(app) {
   GET.require('./api/snippet')(app);
   GET.require('./api/mongoose')(app);
   GET.require('./api/book')(app);
   GET.require('./api/person')(app);
   GET.require('./api/story')(app);
   GET.require('./api/history')(app);
   GET.require('./api/document/routes')(app);
   return router;
};
// module.exports = router;
