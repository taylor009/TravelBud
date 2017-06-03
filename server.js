// Server.js - The first file to initiate the application Node/EXpress server.
// ******************
// **Dependencies**
// ================================================

var express = required("express");
var bodyparser = require("body-parser");

// Sets up the Express App 
// ===============================================

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for synching 
var db = require("./entries");

//Sets up the Express app to handle parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Static directory 
app.use(express.static("./public"));

// Routes =======================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Starting our express app
app.listen(PORT, function() {
	cosole.log("Server is connected - Application is ready to start" + PORT); 
});