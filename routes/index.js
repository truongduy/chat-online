var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat Online' });
});

router.post('/', function(req, res, next) {
  let user = req.body;
  console.log(user.username);
  res.render('index', { title: 'Chat Online', name: user.username });
});

module.exports = router;
