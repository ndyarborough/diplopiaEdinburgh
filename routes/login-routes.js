var db = require('../models');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {
	//Signs up a new user
	app.post('/register', function(req, res) {
	  	var email = req.body.email;
	  	var password = req.body.password;
	  	var password2 = req.body.password2;


  		// Validation
		req.checkBody('email', 'Email is required').notEmpty();
		req.checkBody('email', 'Email is not valid').isEmail();
		req.checkBody('password', 'Password is required').notEmpty();
		req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

		var errors = req.validationErrors();

		if(errors){
			res.render('register',{
				errors:errors
			});
		} else {
			var newUser = {
				email:email,
				password: password
			};

			db.User.create(newUser).then(function(results) {
				console.log(results);
			})

			req.flash('success_msg', 'You are registered and can now login');

			console.log(req.user)
	    	
	    	res.sendFile(path.join(__dirname, '../public/main.html'))
		}
	});

	//Calls function which searches dadtbase for matches
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
		},	
	  	function(emailAdd, passwd, done) {
		    db.User.findOne({ where: {
		   		email: emailAdd 
		    }}).then(function(results) {
		    	console.log(results);
			   	if(!results){
			   		return done(null, false, {message: 'Unknown User'});
			   	}
		   	});

		   	db.User.findOne({ where: {
		   		password: passwd
		   	}}).then(function(results) {
		    	console.log(results);
		   		if(results) {
		   			return done(null, results);
		   		} else {
		   			return done(null, false, {message: 'Invalid password'});
		   		}
		   	});
	    }
    ));

	//Creates session for a signed in user
	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  db.User.findOne({ where: {
	  	id: user.id
	  }}).then(function(user) {
	    done(null, user)
	  }).error(function(err) {
	  	done(err, null)
	  });
	});

	//Call to database 
	app.post('/login',
	  passport.authenticate('local'),
	  function(req, res) {
	  	console.log(req.user.email)
	    console.log(req.user.password)
	    // If this function gets called, authentication was successful.
	    // `req.user` contains the authenticated user.
	    res.sendFile(path.join(__dirname, '../public/main.html'))
	  });

	app.get('/logout', function(req, res){
		req.logout();

		req.flash('success_msg', 'You are logged out');

		res.redirect('/');
	});
}