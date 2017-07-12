var bodyParser = require('body-parser');
var csrf = require('csurf');
var session = require('client-sessions');
var flash = require('connect-flash');

var sess = {
  cookieName: 'session',
  secret: 'keyboard chat',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
};

module.exports = function(router) {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(session(sess));
  router.use(flash());
  // router.use(csrf());
};
