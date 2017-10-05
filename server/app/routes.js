var AuthController = App.require('server/app/controllers/auth');
var MainController = App.require('server/app/controllers/main');

var env = App.masterRequire('env');

var flash = AuthController.MID.flash;
var requireLogin = AuthController.MID.requireLogin;

var proxy = require('express-http-proxy');

var GameDev = App.masterRequire('game/dev');

module.exports = function(app) {

	app.use(AuthController.MID.main);

	app.use('/game', function(req, res, next) {
		if (!GameDev.hasStarted) {
			GameDev.start(app, function(err, data) {
				if (err) return res.send(err);
				res.send(data);
			});
			next();
			return;
		} else {
			var port = '4020';
			return proxy(`http://${env.host}:${port}`)(req, res, next);
		}
	});

	app.get('/dev/game', function(req, res) {
	});

	app.get('/', flash, MainController.GET.index);

	app.get('/login', flash, AuthController.GET.login);
	app.post('/login', AuthController.POST.login);
	app.get('/register', flash, AuthController.GET.register);
	app.post('/register', AuthController.POST.register);
	app.get('/dashboard', requireLogin, flash, AuthController.GET.dashboard);
	app.get('/logout', flash, AuthController.GET.logout);

	app.get('/chat', requireLogin, MainController.GET.chat);

  app.all('*', function(req, res, next) {
    res.status(404).end(`
        <link rel="stylesheet" href="/lib/w3.css">
        <div style="margin-top: 15px;"></div>
        <div class="w3-container">
          <a class="w3-btn w3-red" href="/">HOME</a>
          <p>PAGE NOT FOUND: ${req.url}</p>
          <p id="date">${new Date()}</p>
          <p>${req.url}</p>
          <a class="w3-btn w3-yellow" onclick="window.history.back()">BACK</a>
        </div>
        <script>
          setInterval(function() {
            document.querySelector("#date").innerHTML = new Date();
          }, 1000);
        </script>
      `);
    next();
  });

};
