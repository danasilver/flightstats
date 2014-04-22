## flightstats

A CORS enabled wrapper on the FlightStats API.

Created for use on a project for [Middlebury College CS465](go.middlebury.edu/infovis) requiring AJAX access to the FlightStats API.

### Use

Use the same exact URL as with FlightStats, only with `flightstats-api.herokuapp.com` prepended in place of `api.flightstats.com`.

Example:

```js
var url = "http://flightstats-api.herokuapp.com/flex/airports/rest/v1/json/cityCode/ABC?appId=APPID&appKey=APPKEY",
    xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send(null);
```

HTTP and HTTPS protocols are supported.

You still need an `appId` and `appKey`!