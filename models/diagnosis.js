module.exports = (sequelize, DataTypes) => {
	let Diagnosis = sequelize.define("Diagnosis", {
		//timestamps: false,
		diagnosis: {
			type: DataTypes.STRING
		},
		etiology: {
			type: DataTypes.STRING
		},
		timeline: {
			type: DataTypes.STRING
		},
		workup: {
			type: DataTypes.STRING
		}
	});
	return Diagnosis;
}