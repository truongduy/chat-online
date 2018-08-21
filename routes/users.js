var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Form' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register Form' });
});

router.post('/login', function(req, res, next) {
  res.render('login', { title: 'Login Form' });
});

router.post('/register', function(req, res, next) {
  res.render('register', { title: 'Register Form' });
});

module.exports = router;
