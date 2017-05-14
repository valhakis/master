var express = require('express');
var router = express.Router();

require('./lite-server')(router);
require('./kitten')(router);
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

module.exports = router;
