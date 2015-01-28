var express = require('express');
var router = express.Router();

var zipcodes = require('zipcodes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zipcast' });
});

router.get('/:zip', function (req, res) {
  zip = req.params.zip;

  // Synchronous lookup... boo!
  info = zipcodes.lookup(zip);
  info.zip = zip;

  res.render('weather', { title: 'Zipcast', zipInfo: info });
});

module.exports = router;
