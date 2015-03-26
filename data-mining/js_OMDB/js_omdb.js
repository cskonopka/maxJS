autowatch = 1;
outlets = 8;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  
}).listen(8080);


function get(url){
  var ajaxreq 					= 	new XMLHttpRequest();
  ajaxreq.open("GET", url);
  ajaxreq.onreadystatechange 	= 	readystatechange;
  ajaxreq.send();
}

function readystatechange(){
  var js 			= this._getResponseKey("body");
  var parsing 		= JSON.parse(js);

	outlet(0, parsing.Response);
  	outlet(1, parsing.Year);
	outlet(2, parsing.Released);
	outlet(3, parsing.Genre);
	outlet(4, parsing.Director);
	outlet(5, parsing.Actors);
	outlet(6, parsing.Plot);
	outlet(7, parsing.Poster);
  // console.log(parsing.Title);
  // console.log(parsing.Year);
  // console.log(parsing.Rated);
  // console.log(parsing.Released);
  // console.log(parsing.Runtime);
  // console.log(parsing.Genre);
  // console.log(parsing.Director);
  // console.log(parsing.Writer);
  // console.log(parsing.Actors);
  // console.log(parsing.Plot);
  // console.log(parsing.Language);  
  // console.log(parsing.Poster);
}