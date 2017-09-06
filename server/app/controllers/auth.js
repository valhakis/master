var fs = require('fs');
var hbs = require('handlebars');
var bcrypt = require('bcryptjs');
var User = App.require('mongo-api/user');

var render = function(path, res) {
	var source = fs.readFileSync(App.root('server/views/') + path, 'utf-8');
	res.end(hbs.compile(source)(res.locals));
};

// GET
// ===============================================
exports.GET = {
	register: function(req, res) {
		render('register.hbs', res);
	},
	login: function(req, res) {
		if (req.user) {
			req.flash('message', 'It seems that you are already logged in.');
			res.redirect('/dashboard');
			return;
		}
		render('login.hbs', res);
	},
	dashboard: function(req, res) {
		render('dashboard.hbs', res);
	},
	logout: function(req, res) {
		req.session.destroy(function() {
			res.redirect('/');
		});
		// req.session.reset();
	}
};

// POST
// ===============================================
exports.POST = {
	register: function(req, res) {
		var errors = [];
		var hasError = {
			name: {},
			email: {},
			username: {},
			password: {},
			password2: {}
		};

		var name = req.body.name;
		var email = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var password2 = req.body.password2;

		if (!name) {
			errors.push({message: "Name is required."});
			hasError.name.error = 'Name is required.';
		}

		if (!email) {
			errors.push({message: "Email is required."});
			hasError.email.error = 'Email is required.';
		}

		if (!username) {
			errors.push({message: "Username is required."});
			hasError.username.error = 'Username is required.';
		}

		if (!password) {
			errors.push({message: "Password is required."});
			hasError.password.error = 'Password is required.';
		}

		if (password != password2) {
			errors.push({message: "Passwords do not match."});
			hasError.password2.error = 'Passwords do not match.';
		}

		if (errors.length > 0) {
			req.flash('errors', errors);
			req.flash('hasError', hasError);
			res.redirect('back');
			return;
			// return res.send({message: "Failed to register.", errors: errors});
		}

		var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

		var user = new User({
			name: name,
			email: email,
			username: username,
			password: hash
		});

		user.save(function(err) {
			if (err) {
				if (err.code == 11000) {
					req.flash('error', 'User already exists.');
					res.redirect('back');
				} else {
					res.send(err);
				}
			} else {
				req.flash('success', 'Registration successful.');
				res.redirect('back');
			}
		});
	},
	login: function(req, res) {
		User.findOne({ email: req.body.email }, function(err, user) {
			if (!user) {
				req.flash('error', 'Invalid email or password.');
				res.redirect('back');
			} else {
				// if (req.body.password == user.password) {
				if (bcrypt.compareSync(req.body.password, user.password)) {
					req.session.user = user; // set-cookie: session={email='', ...}
					req.flash('success', 'Login was successful apparantlLogin was successful.');
					res.redirect('/dashboard');
				} else {
					req.flash('error', 'Invalid email or password.');
					res.redirect('back');
				}
			}
		});
	}
};

exports.MID = {
	requireLogin: function(req, res, next) {
		if (!req.user) {
			req.flash('error', 'To access this page, you must log in.');
			res.redirect('/login');
		} else {
			next();
		}
	},
	flash: function(req, res, next) {
		res.locals.error = req.flash('error') || null;
		res.locals.success = req.flash('success') || null;
		res.locals.message = req.flash('message') || null;
		res.locals.errors = req.flash('errors') || [];
		res.locals.hasError = req.flash('hasError')[0] || {};
		next();
	},
	main: function(req, res, next) {
		if (req.session && req.session.user) {
			User.findOne({ email: req.session.user.email }, function(err, user) {
				if (err) {
					return res.send(err);
				}
				if (user) {
					req.user = user;
					delete req.user.password;
					req.session.user = req.user;

					if (req.user.email == 'ruudi170@gmail.com') {
						req.user.master = true;
					} else {
						req.user.master = false;
					}

					res.locals.user = req.user;
				}
				next();
			});
		} else {
			next();
		}
	}
};
