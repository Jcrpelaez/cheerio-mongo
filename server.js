var express = require("express");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
var hbs = require("express-hbs");
var logger = require("morgan");

// Web scrapping Tools
var cheerio = require("cheerio");
var axios = require("axios");

// Use morgan logger for logging requests
app.use(logger("dev"));

// Connect to the Mongo DB 
mongoose.connect("mongodb://localhost/scraped-news", {
  useNewUrlParser: true
});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

// Use `.hbs` for extensions and find partials in `views/layouts`.
app.engine(
  "hbs",
  hbs.express4({
    defaultLayout: +"main"
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("main.hbs", function(req, res) {
  res.send("");
});

app.listen(PORT, function() {
  console.log("App running on port" + PORT + "!");
});

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);