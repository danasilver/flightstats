## flightstats

A CORS enabled wrapper on the FlightStats API.

Created for use on a project for [Middlebury College CS465](go.middlebury.edu/infovis) requiring AJAX access to the FlightStats API.

### Support

Currently only supports scheduled flights by route, departing on a given date, detailed [here](https://developer.flightstats.com/api-docs/scheduledFlights/v1).

### Use

Use the same exact URL as with FlightStats, only with `flightstats-api.herokuapp.com` prepended in place of `api.flightstats.com`.

Example:

```js
var url = "http://flightstats-api.herokuapp.com/flex/schedules/rest/v1/json/from/PHL/to/BTV/departing/2014/4/22?appId=APPID&appKey=APPKEY",
    xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send(null);
```

You still need an `appId` and `appKey`!