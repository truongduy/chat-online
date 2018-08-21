'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('messages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			roomId: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			message: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable('messages');
	}
};
