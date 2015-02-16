var http = require('http');
// var fs = require('fs');
// var request = require('request');
// var  curl = require('node-curl');
var Reddit = require('handson-reddit'); // working title

reddit = new Reddit();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  

reddit.r('tifu', function (err, results) {


// console.log(results);
// console.log(results.body);
// fileObject = Object.keys(results.body);

var children = Object.keys(results); 
console.log(results.body[1].data);


	// console.log(results.body);

	// fileObject = Object.keys(results.body.data.children);
	// console.log
	// console.log(results.body["data"]);	

	// console.log(results.body.length);
	// var file = Object.keys(results.body.data);
	// console.log(results.body.data.file);	
});


}).listen(8080);







//   reddit.hot('TIFU').limit(max).fetch(function(res) {

// fileObject = Object.keys(res.data);

// var childrenLength = res.data.children.length;

// // console.log(fileObject[1]);
// // console.log(fileObject[1]);

// var TIFU_title = res.data.children[randomized].data.title; 
// var TIFU_text = res.data.children[randomized].data.selftext;

// console.log(res.data.children)


// });
