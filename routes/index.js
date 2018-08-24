var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '偉大なるレグポンの世界へようこそ' });
});

module.exports = router;
