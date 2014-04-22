var express = require('express'),
    request = require('request');

var app = express();

var flightstats_routes_url = 'https://api.flightstats.com/flex/schedules/rest/v1/json';

app.get('/flex/schedules/rest/v1/json/from/:from/to/:to/departing/:y/:m/:d', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var request_url = flightstats_routes_url +
                    '/from/' + req.param('from') +
                    '/to/' + req.param('to') +
                    '/departing/' + req.param('y') +
                    '/' + req.param('m') +
                    '/' + req.param('d') + 
                    '?appId=' + req.param('appId') +
                    '&appKey=' + req.param('appKey');

  console.log(request_url);

  request.get(request_url, function(err, r_res, body) {
    if (err) res.send(500);
    else res.send(JSON.parse(body));
  });
}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ' + port + '.');
})