const express = require('express');
const router = express.Router();
const userSkill = require('./userSkillsModel');
const userSkillsServices = require('./userSkillsServices');
const user = require('../users/userModel');
const skill = require('../skills/skillModel');

/* GET userSkills listing. */
user.belongsToMany(skill, { as: 'skills', through: userSkill, foreignKey: 'userId' });
skill.belongsToMany(user, { as: 'users', through: userSkill, foreignKey: 'idSkill' });

router.get('/', (req, res) => {
	const limitData = 2;
	user.findAndCountAll({
		limit: limitData,
		include: [{
			model: skill, as: 'skills', through: { as: 'levelSkill', attributes: ['level']}
		}]
	}).then(({
		rows,
		count,
	}) => {
		const response = {
			items: rows,
			quotaMax: count,
			quotaRemaining: count > limitData ? count - limitData : 0,
			hasMore: count > limitData,
		};
		res.json(response);
	});
});

router.get('/:id', (req, res) => {
	user.find({
		where: {
			id: req.params.id
		},
		include: [{
			model: skill, as: 'skills', through: { as: 'levelSkill', attributes: ['level']}
		}]
	}).then((users) => {
		res.json(users);	
	});
});

router.put('/:id', function (req, res) {
	const userSkillId = req.params.id,
		userSkill = req.body;

	userSkillsServices.update(userSkill, {
		where: { id: userSkillId }
	}).then((task) => {
		const response = {
			items: userSkill,
			task: task,
		};
		res.json(response);
	});
});

module.exports = router;
