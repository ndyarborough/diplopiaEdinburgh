var db = require("../models");

module.exports = function(app) {

	app.get('/api/diagnosis', function(req, res) {
		db.Diagnosis.findAll({}).then(function(results) {
			res.json(results);
		});
	});
	// app.get("/api/diagnosis", function(req, res) {
	// 	if (req.params.id) {
	// 		Diagnosis.findAll({}).then(function(results){
	// 			res.json(results);
	// 		});
	// 	}
	// });
}