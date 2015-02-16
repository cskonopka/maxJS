var http = require('http');
var fs = require('fs');
var request = require('request');
var  curl = require('node-curl');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  
}).listen(8080);


curl('https://raw.githubusercontent.com/timothyasp/death-penalty/master/texas_executions.min.json', function(err) {
  var js = this.body;
  var parsing = JSON.parse(js);
  var fileOBJECT = Object.keys(parsing.executions);
  var objFILElength = Object.keys(fileOBJECT).length;

    for(var i = 0; i < objFILElength; i++){
        if(parsing.executions[i].last_statement != undefined){
            if(parsing.executions[i].last_statement["Last Statement"]!=undefined){
                console.info(parsing.executions[i].last_statement["Last Statement"]);
            }           
        }
    }
});


