module.exports = function(app) {

	app.get('api/diplopia', function(req, res) {
		db.Diplopia.findOne({}).then(function(data) {
			res.json(data);
		});
	});
}