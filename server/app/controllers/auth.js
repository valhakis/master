var fs = require('fs');

var render = function(path, res) {
	var source = fs.readFileSync(App.root('server/views/') + path, 'utf-8');
	res.end(source);
};

var User = App.require('mongo-api/user');

exports.getRenderLogin = function(req, res) {
	render('login.html', res);
};

exports.postDoLogin = function(req, res) {
	User.findOne({ email: req.body.email }, function(err, user) {
		if (!user) {
			res.send({message: "Invalid email or password."});
		} else {
			// if (req.body.password == user.password) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				req.session.user = user; // set-cookie: session={email='', ...}
				res.redirect('/dashboard');
			} else {
				res.send({message: "Invalid email or password."});
			}
		}
	});
};

exports.useRequireLogin = function(req, res, next) {
	if (!req.user) {
		res.redirect('/');
	} else {
		next();
	}
};

exports.useMiddleware = function(req, res, next) {
	if (req.session && req.session.user) {
		User.findOne({ email: req.session.user.email }, function(err, user) {
			if (err) {
				return res.send(err);
			}
			if (user) {
				req.user = user;
				delete req.user.password;
				req.session.user = req.user;
				res.locals.user = req.user;
			}
			next();
		});
	} else {
		next();
	}
};

exports.getLogOut = function(req, res) {
	req.session.reset();
	res.redirect('/home');
};

exports.postRegister = function(req, res) {
	var errors = [];

	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	if (!name) {
		errors.push({message: "Name is required."});
	}

	if (!email) {
		errors.push({message: "Email is required."});
	}

	if (!username) {
		errors.push({message: "Username is required."});
	}

	if (!password) {
		errors.push({message: "Password is required."});
	}

	if (password != password2) {
		errors.push({message: "Passwords do not match."});
	}

	if (errors.length > 0) {
		return res.send({message: "Failed to register.", errors: errors});
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
				res.send({message: "User already exists."});
			} else {
				res.send(err);
			}
		} else {
			res.send({message: "User has been created"});
		}
	});
};

exports.renderRegister = function(req, res) {
	render('register.html', res);
};
