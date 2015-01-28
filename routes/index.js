var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zipcast' });
});

router.get('/:zip', function (req, res) {
  res.render('weather', { title: 'Zipcast', zip: req.params.zip });
});

module.exports = router;
