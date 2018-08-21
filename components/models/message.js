'use strict';
module.exports = (sequelize, DataTypes) => {
	var message = sequelize.define('message', {
		roomId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		message: DataTypes.STRING
	}, {});
	message.associate = function() {
		// associations can be defined here
	};
	return message;
};
