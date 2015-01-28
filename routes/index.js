var express = require('express');
var router = express.Router();

var zipcodes = require('zipcodes');
var Forecast = require('forecast.io');


var forecast = new Forecast({
  APIKey: process.env.FORECAST_API_KEY,
  timeout: 1000
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Zipcast' });
});

router.get('/:zip', function (req, res, next) {
  zip = req.params.zip;

  // Synchronous lookup... boo!
  info = zipcodes.lookup(zip);
  info.zip = zip;

  forecast.get(info.latitude, info.longitude, function (forecastErr, forecastRes, forecastData) {
    if (forecastErr) {
      next(forecastErr);
      return;
    }

    res.render('weather', { title: 'Zipcast', zipInfo: info, forecastData: forecastData });
  });
});

module.exports = router;
