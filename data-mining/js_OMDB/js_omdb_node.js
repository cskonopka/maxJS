var http = require('http');
var fs = require('fs');
var request = require('request');
var  curl = require('node-curl');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  
}).listen(8080);


curl('http://www.omdbapi.com/?t=Thief&plot=full&r=json', function(err) {
  var js = this.body;
  var parsing = JSON.parse(js);

  console.log(parsing.Title);
  console.log(parsing.Year);
  console.log(parsing.Rated);
  console.log(parsing.Released);
  console.log(parsing.Runtime);
  console.log(parsing.Genre);
  console.log(parsing.Director);
  console.log(parsing.Writer);
  console.log(parsing.Actors);
  console.log(parsing.Plot);
  console.log(parsing.Language);  
  console.log(parsing.Poster);
});


