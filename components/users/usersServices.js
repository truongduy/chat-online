const User = require('./userModel');
// module.exports = User;

const findAll = (options) => User.findAll(options);
const findAndCountAll = (options) => User.findAndCountAll(options);
const find = (options) => User.find(options);
const update = (options, condition) => User.update(options, condition);
const build = (options) => User.build(options);
const destroy = (options) => User.destroy(options);
const belongsToMany = (options) => User.belongsToMany(options);

module.exports = {
	find,
	findAll,
	findAndCountAll,
	update,
	build,
	destroy,
	belongsToMany,
};
