var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

// var db = require('../models');
// var path = require('path');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// module.exports = function(app) {
// 	//Signs up a new user
// 	app.post('/register', function(req, res) {
// 	  	var email = req.body.email;
// 	  	var password = req.body.password;
// 	  	var password2 = req.body.password2;


//   		// Validation
// 		req.checkBody('email', 'Email is required').notEmpty();
// 		req.checkBody('email', 'Email is not valid').isEmail();
// 		req.checkBody('password', 'Password is required').notEmpty();
// 		req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

// 		var errors = req.validationErrors();

// 		if(errors){
// 			res.render('register',{
// 				errors:errors
// 			});
// 		} else {
// 			var newUser = {
// 				email:email,
// 				password: password
// 			};

// 			db.User.create(newUser).then(function(results) {
// 				console.log(results);
// 			})

// 			req.flash('success_msg', 'You are registered and can now login');

// 			console.log(req.user)
	    	
// 	    	res.sendFile(path.join(__dirname, '../public/main.html'))
// 		}
// 	});

// 	//Calls function which searches dadtbase for matches
// 	passport.use(new LocalStrategy({
// 		usernameField: 'email',
// 		passwordField: 'password'
// 		},	
// 	  	function(emailAdd, passwd, done) {
// 		    db.User.findOne({ where: {
// 		   		email: emailAdd 
// 		    }}).then(function(results) {
// 		    	console.log(results);
// 			   	if(!results){
// 			   		return done(null, false, {message: 'Unknown User'});
// 			   	}
// 		   	});

// 		   	db.User.findOne({ where: {
// 		   		password: passwd
// 		   	}}).then(function(results) {
// 		    	console.log(results);
// 		   		if(results) {
// 		   			return done(null, results);
// 		   		} else {
// 		   			return done(null, false, {message: 'Invalid password'});
// 		   		}
// 		   	});
// 	    }
//     ));

// 	//Creates session for a signed in user
// 	passport.serializeUser(function(user, done) {
// 	  done(null, user);
// 	});

// 	passport.deserializeUser(function(user, done) {
// 	  db.User.findOne({ where: {
// 	  	id: user.id
// 	  }}).then(function(user) {
// 	    done(null, user)
// 	  }).error(function(err) {
// 	  	done(err, null)
// 	  });
// 	});

// 	//Call to database 
// 	app.post('/login',
// 	  passport.authenticate('local'),
// 	  function(req, res) {
// 	  	console.log(req.user.email)
// 	    console.log(req.user.password)
// 	    // If this function gets called, authentication was successful.
// 	    // `req.user` contains the authenticated user.
// 	    res.sendFile(path.join(__dirname, '../public/main.html'))
// 	  });

// 	app.get('/logout', function(req, res){
// 		req.logout();

// 		req.flash('success_msg', 'You are logged out');

// 		res.redirect('/');
// 	});
// }
