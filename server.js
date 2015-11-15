// server.js
var http = require("http");
// Add some middleware.
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");

// Setup the view engine.
//app.set("view engine", "jade");

//app.engine("ejs", ejsEngine);   // Support master pages.
//app.set("view engine", "ejs");  // ejs view engine.
app.set("view engine", "vash");  // vash view engine.

// Map the routes.
controllers.init(app);

//app.get("/", function(req, res) {
//    //res.send("<html><body><h1>Express</h1></body></html>");
//    //res.render("jade/index", { title: "Express + Jade" });
//    res.render("index", { title: "Express + Vash" });
//});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Luis", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);








//var server = http.createServer(function(req, res) {
//	console.log(req.url);
//    res.write("<html><body><h1>" + req.url + "</h1></body></html>");
//    res.end();
//});

//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);