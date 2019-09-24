const express = require("express");
var mongoose = require("mongoose");
const app = express();
const db = require("./models"); // Requires plant schema in models folder
const PORT = process.env.PORT || 3001; // Set server-port to 3001

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// References MongoDB database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/plantly";
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

// Define API routes here
// Treffle API plant search request
// app.get("/API-search/:plantSearch", (req, res) => {
//   console.log('endpoint hit');
//   var tolken = "token=c1crZVFidEhCZzhoOTVnUWVyNFNZUT09";
//   var endPoint = "https://trefle.io/api/plants?"+ tolken + "&q=" + req.params.plantSearch;
//   axios.get(endPoint)
//   .then(data => {res.json(data.data)})
//     .catch(err => res.json(err));
// });
// Treffle API ID search
// app.get("/ID-search/:id", (req, res) => {
//   var tolken = "token=c1crZVFidEhCZzhoOTVnUWVyNFNZUT09";
//   console.log(req.params.id)
//   var endPoint = "https://trefle.io/api/plants/" + req.params.id + "?" + tolken;
//   axios.get(endPoint)
//   .then(data => {res.json(data.data)})
//     .catch(err => res.json(err));
// });

// Plantly explore api route
app.get("/plantly-explore", (req, res) => {
  console.log("Entire list of plants should populate here");
  try {
    db.plant.find({}).then(plants => {
      res.json(plants);
      console.log(plants);
    });
  } catch (err) {
    console.log(err);
  }
});
// Plantly database API route
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

// Creates initial plant-database
// var plantdb = require("./plantlyAPI.json")
// db.plant.create(plantdb).then(plant => console.log(plant));
