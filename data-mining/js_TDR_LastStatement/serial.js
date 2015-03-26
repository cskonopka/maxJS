autowatch = 1;

function get(url){
  var ajaxreq 					= 	new XMLHttpRequest();
  ajaxreq.open("GET", url);
  ajaxreq.onreadystatechange 	= 	readystatechange;
  ajaxreq.send();
}

function readystatechange(){
  var js 			= this._getResponseKey("body");
  var parsing 		= JSON.parse(js);
  var fileOBJECT 	= Object.keys(parsing.executions);
  var objFILElength = Object.keys(fileOBJECT).length;

    for(var i = 0; i < objFILElength; i++){
        if(parsing.executions[i].last_statement != undefined){
            if(parsing.executions[i].last_statement["Last Statement"]!=undefined){
                outlet(0, parsing.executions[i].last_statement["Last Statement"]);
            } 
        }
    }
}