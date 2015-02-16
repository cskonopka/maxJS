autowatch = 1;
outlets = 17;

function get(url){
  var ajaxreq           =   new XMLHttpRequest();
  ajaxreq.open("GET", url);
  ajaxreq.onreadystatechange  =   readystatechange;
  ajaxreq.send();
}

function readystatechange(){
  var js      = this._getResponseKey("body");
  var parsing     = JSON.parse(js);

  outlet(1, parsing.report.terrestrial_date);
  outlet(2, parsing.report.sol);
  outlet(3, parsing.report.ls);    
  outlet(4, parsing.report.min_temp);
  outlet(5, parsing.report.min_temp_fahrenheit);
  outlet(6, parsing.report.max_temp);
  outlet(7, parsing.report.max_temp_fahrenheit);
  outlet(8, parsing.report.pressure);
  outlet(9, parsing.report.pressure_string); 
  outlet(10, parsing.report.abs_humidity);
  outlet(11, parsing.report.wind_speed);
  outlet(12, parsing.report.wind_direction);
  outlet(13, parsing.report.atmo_opacity);
  outlet(14, parsing.report.season);
  outlet(15, parsing.report.sunrise);
  outlet(16, parsing.report.sunset);
};

