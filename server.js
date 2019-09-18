const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const request = require("request"); //Makes http calls
const cheerio = require("cheerio"); //Scraper

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
``;

// Define API routes here


// API plant search request
app.get("/API-search/:plantSearch", (req, res) => {
  var tolken = "token=c1crZVFidEhCZzhoOTVnUWVyNFNZUT09";
  var endPoint = "https://trefle.io/api/plants?"+ tolken + "&common_name=" + req.params.plantSearch;
  axios.get(endPoint)
  .then(data => {res.json(data.data)})
    .catch(err => res.json(err));
});

// API ID search
app.get("/ID-search/:id", (req, res) => {
  var tolken = "token=c1crZVFidEhCZzhoOTVnUWVyNFNZUT09";
  console.log(req.params.id)
  var endPoint = "https://trefle.io/api/plants/" + req.params.id + "?" + tolken;
  axios.get(endPoint)
  .then(data => {res.json(data.data)})
    .catch(err => res.json(err));
});

// Default route to index.html
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.json("Hello!");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
