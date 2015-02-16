var http = require('http');
// var fs = require('fs');
// var request = require('request');
// var  curl = require('node-curl');
var reddit = require('reddit-api	');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});  
}).listen(8080);


  reddit.hot('TIFU').limit(max).fetch(function(res) {

fileObject = Object.keys(res.data);

var childrenLength = res.data.children.length;

// console.log(fileObject[1]);
// console.log(fileObject[1]);

var TIFU_title = res.data.children[randomized].data.title; 
var TIFU_text = res.data.children[randomized].data.selftext;

console.log(res.data.children)


});
