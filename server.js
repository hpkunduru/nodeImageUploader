var http = require("http");
var url = require("url");

exports.start = function (route, handle) {
	http.createServer(function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}).listen(3000);
	console.log("Server started");
};