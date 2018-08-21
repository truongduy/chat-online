const express = require('express');
const router = express.Router();
const usersRouter = require('../components/users').router;
const skillsRouter = require('../components/skills').router;
const uerSkillsRouter = require('../components/userSkills').router;

router.use('/users', usersRouter);
router.use('/skills', skillsRouter);
router.use('/user-skills', uerSkillsRouter);

module.exports = router;
