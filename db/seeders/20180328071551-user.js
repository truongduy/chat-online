'use strict';

module.exports = {
	up: (queryInterface) => {
		return queryInterface.bulkInsert('Users', [{
			userName: 'huyen.tran',
			email: 'tran.nguyen@sutrixsolutions.com',
			phone: '01234123456',
			ip: '103.19.166.133',
		},
		{
			userName: 'ngo.thanh92',
			email: 'ngothanh@gmail.com',
			phone: '01550 255252',
			ip: '103.19.166.133',
		},
		{
			userName: 'truongvan20',
			email: 'truongvan20@hotmail.com',
			phone: '0119 309 0605',
			ip: '103.19.166.133',
		},
		{
			userName: 'vanngothanh',
			email: 'ngthanhvan@gmail.com',
			phone: '01550 255252',
			ip: '103.19.166.133',
		}], {});
	},
	
	down: (queryInterface) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
