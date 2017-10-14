var path = require("path");

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	})

	//Not needed but want to keep just in case
	// app.get('/main', function(req, res) {
	// 	res.sendFile(path.join(__dirname, '../public/main.html'));
	// })
}