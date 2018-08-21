const express = require('express');
const router = express.Router();
const userService = require('./usersServices');

/* GET users listing. */
router.get('/', (req, res) => {
	const limitData = 2;
	userService.findAndCountAll({
		limit: limitData,
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
	userService.find({
		where: {
			id: req.params.id
		},
	}).then((users) => {
		res.json(users);
	});
});

router.put('/:id', function (req, res) {
	const userId = req.params.id,
		user = req.body;
	
	userService.update(user, {
		where: { id: userId }
	}).then((task) => {
		const response = {
			items: user,
			task: task,
		};
		res.json(response);
	});
});

router.patch('/:id', (req, res) => {
	const userId = req.params.id,
		user = req.body;

	userService.update(user, {
		where: { id: userId } 
	}).then((task) => {
		const response = {
			items: user,
			task: task,
		};
		res.json(response);
	});
});

router.post('/add', function(req, res) {
	const user = req.body;
	
	userService.build(user).save().then(function(task) {
		res.send(task);
	});
});

router.delete('/:id', function(req, res) {
	userService.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(task) {
		res.json(task);
	});
});

module.exports = router;
