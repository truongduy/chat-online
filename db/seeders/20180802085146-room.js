'use strict';

module.exports = {
	up: (queryInterface) => {
		return queryInterface.bulkInsert('Rooms', [{
			name: 'Client 1',
			userId1: 'admin',
			userId2: 'client',
		},
		{
			name: 'Client 2',
			userId1: 'admin',
			userId2: 'truongduy',
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('Room', null, {});
	}
};
