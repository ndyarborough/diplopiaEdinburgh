module.exports = function(app) {

	app.get('api/diagnosis', function(req, res) {
		db.Diagnosis.findOne({}).then(function(data) {
			console.log(data);
			res.json(data);
		});
	});
}