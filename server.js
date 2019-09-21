const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const db = require("./models"); // Requires plant schema in models folder

// Set server-port to 3001
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// References MongoDB database
var MONGODB_URI = 'mongodb+srv://admin:admin@cluster0-fyxsd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then( () => console.log('mongoose connection success'))
.catch(err => console.log('mongoose connect err', err));

// Define API routes here

// Plantly API explore route
app.get("/plantly-explore", (req, res) => {
  console.log('/plantly-explore/ hit');
  db.plant.find().then(plants => res.json(plants));
});

// Plantly API search route
app.get("/plantly-search/:plantName", (req, res) => {
  console.log(req.params.plantName);
  db.plant
    .find({ commonName: { $regex: req.params.plantName, $options: "i" } })
    .then(plants => res.json(plants));
});

// Default route to index.html
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.json("Hello!");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Creates initial plant-database from plantlyAPI.json
// var plants = require("./plantlyAPI.json")
// db.plant.create(plants).then(plant => console.log(plant));
