var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {title: 'Tuxemon', page_name: 'index'});
});

router.get('/monster-maker', function(req, res) {
  res.render('pages/monster-maker', {title: 'Tuxemon | Monster Maker', page_name: 'monster-maker'});
});

module.exports = router;
