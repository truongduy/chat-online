const UserSkills = require('./userSkillsModel');
// module.exports = User;

const findAll = (options) => UserSkills.findAll(options);
const findAndCountAll = (options) => UserSkills.findAndCountAll(options);
const find = (options) => UserSkills.find(options);
const update = (options, condition) => UserSkills.update(options, condition);
const build = (options) => UserSkills.build(options);
const destroy = (options) => UserSkills.destroy(options);
const belongsToMany = (options) => UserSkills.belongsToMany(options);
const hasMany = (options) => UserSkills.hasMany(options);

module.exports = {
	find,
	findAll,
	findAndCountAll,
	update,
	build,
	destroy,
	belongsToMany,
	hasMany,
};
