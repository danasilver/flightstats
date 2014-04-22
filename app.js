var express = require('express'),
    request = require('request');

var app = express();

var flightstats_url = 'https://api.flightstats.com';

app.get('/', function(req, res) {
  res.send(200, '<p>See documentation for API usage.<p>' +
                '<p><a href="https://github.com/danasilver/flightstats">Documentation for this project</a></p>' +
                '<p><a href="https://developer.flightstats.com/api-docs/">FlightStats Documentation</a></p>')
});

app.get('*', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  request.get(flightstats_url + req.originalUrl, function(err, r_res, body) {
    if (err) res.send(500);
    else if (r_res.statusCode === 200) res.send(JSON.parse(body));
    else res.send(body);
  });
}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ' + port + '.');
});
