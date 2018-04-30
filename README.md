## flightstats

A CORS enabled wrapper on the FlightStats API.

Created for use on a project for [Middlebury College CS465](go.middlebury.edu/infovis) requiring AJAX access to the FlightStats API.

### Use

Use the same exact URL as with FlightStats, only with `flightstats-api.herokuapp.com` prepended in place of `api.flightstats.com`.

HTTP and HTTPS protocols are supported.

You still need an `appId` and `appKey`!

### Deploy
The app currently supports deploying on aws lambda and heroku.


#### Deploy using Heroku

There is a Procfile already present so you can just create a heroku app and push this repository to it using git. 

#### Deploy using Lambda

- Install Claudia.js
    - `npm install -g claudia`
- Deploy using claudia
    - `claudia create --handler lambda.handler --deploy-proxy-api --region <your-region> `

Note - Claudia will create a role for itself so make sure your AWS account used for deployment has sufficient access.
### Example

```js
var url = "http://flightstats-api.herokuapp.com/flex/airports/rest/v1/json/cityCode/ABC?appId=APPID&appKey=APPKEY",
    xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send(null);
```