'use strict';
module.exports = (sequelize, DataTypes) => {
	var room = sequelize.define('create-room', {
		id: DataTypes.INTEGER,
		name: DataTypes.STRING,
		userId1: DataTypes.INTEGER,
		userId2: DataTypes.INTEGER
	}, {});
	room.associate = function() {
		// associations can be defined here
	};
	return room;
};
