var http = require('http');
var fs = require('fs');
var request = require('request');
var  curl = require('node-curl');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  
}).listen(8080);


curl('http://marsweather.ingenology.com/v1/latest/', function(err) {
  var js = this.body;
  var parsing = JSON.parse(js);
  console.log(parsing);
});

// function get(url){
//   var ajaxreq           =   new XMLHttpRequest();
//   ajaxreq.open("GET", url);
//   ajaxreq.onreadystatechange  =   readystatechange;
//   ajaxreq.send();
// }

// function readystatechange(){
//   var js      = this._getResponseKey("body");
//   var parsing     = JSON.parse(js);

//   // outlet(1, parsing.report.terrestrial_date);
//   // outlet(2, parsing.report.sol);
//   // outlet(3, parsing.report.ls);    
//   // outlet(4, parsing.report.min_temp);
//   // outlet(5, parsing.report.min_temp_fahrenheit);
//   // outlet(6, parsing.report.max_temp);
//   // outlet(7, parsing.report.max_temp_fahrenheit);
//   // outlet(8, parsing.report.pressure);
//   // outlet(9, parsing.report.pressure_string); 
//   // outlet(10, parsing.report.abs_humidity);
//   // outlet(11, parsing.report.wind_speed);
//   // outlet(12, parsing.report.wind_direction);
//   // outlet(13, parsing.report.atmo_opacity);
//   // outlet(14, parsing.report.season);
//   // outlet(15, parsing.report.sunrise);
//   // outlet(16, parsing.report.sunset);
// };

