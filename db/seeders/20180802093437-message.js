'use strict';

module.exports = {
	up: (queryInterface) => {
		return queryInterface.bulkInsert('Messages', [{
			roomId: '1',
			userId: '1',
			message: 'Comment by User 1',
		},
		{
			roomId: '1',
			userId: '2',
			message: 'Comment by User 2',
		},{
			roomId: '1',
			userId: '1',
			message: 'Test User 1',
		},
		{
			roomId: '1',
			userId: '2',
			message: 'Demo User 2',
		},{
			roomId: '1',
			userId: '2',
			message: 'Demo User 2 lan 2',
		},
		{
			roomId: '1',
			userId: '2',
			message: 'Demo User 2 lan 3',
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('Messages', null, {});
	}
};
