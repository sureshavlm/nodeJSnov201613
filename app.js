
var express = require('express'); //import express module into app.js


var app = express();


/* http://localhost:8080/ */
app.get("/", function(req, res) {
	res.sendFile(__dirname+"/index.html");
});

app.get("/queryProducts", function(req, res) {
	res.json(["iPhone7", "iPad Mini"]);
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
	console.log("Server started on port 8080");
});
