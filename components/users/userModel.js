const Sequelize = require('sequelize');
const config = require('config');
const dbConfig = config.get('dbConfig');
let sequelize = null;
if (config.use_env_constiable) {
	sequelize = new Sequelize(process.env[dbConfig.use_env_constiable], dbConfig);
} else {
	sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

const User = sequelize.define('User', {
	userName: Sequelize.STRING,
	email: Sequelize.STRING,
	phone: Sequelize.STRING,
	ip: Sequelize.STRING,
}, {});

module.exports = User;
