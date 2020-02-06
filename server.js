const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");
let PORT = process.env.PORT || 3000;
var hbs = require("express-hbs");

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(PORT);
