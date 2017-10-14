var db = require("../models");

module.exports = function(app) {
	//How to get diagnosis back to display
	// app.get('/api/diagnosis', function(req, res) {
	// 	db.Diagnosis.findOne({ where: {diagnosis : req.query.diagnosis}}).then(function(results) {
	// 		res.json(results);
	// 	});
	// });

	// How to get a user info back withh diagnosis
	//app.get('/api/user', function(req, res) {
	// 	db.User.findOne({ where: {email : req.query.email}, include: [db.Diagnosis]}).then(function(results) {
	// 		res.json(results);
	// 	});
	// });

	app.get('/api/diagnosis', function(req, res) {
		db.Diagnosis.findAll({}).then(function(results) {
			res.json(results);
		});
	});

	app.get('/api/diagnosis/:diagnosis', function(req, res) {
		db.Diagnosis.findOne({
			where: {
				diagnosis: req.params.diagnosis,
			}
		}).then(function(results) {
			res.json(results);
		});
	});
}