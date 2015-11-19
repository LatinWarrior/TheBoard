var http = require("http");
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");
// Add flash library.
var flash = require("connect-flash");

// Setup the View Engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash");

// Opt into services.
app.use(express.urlencoded());
// Opt into using cookies to track session for a specific user.
app.use(express.cookieParser());
// We need to opt in on session state for flash.
app.use(express.session({ secret: "PluralsightTheBoard" }));
// Use flash for temporary storage of error messages,
// which will be used after redirect.
app.use(flash());

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/api/users", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send({ name: "Shawn", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);
