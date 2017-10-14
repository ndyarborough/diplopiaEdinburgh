module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			}
		},
		password: DataTypes.STRING
	});

	User.associate = function(models) {
		User.belongsTo(models.Diagnosis, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return User;
}