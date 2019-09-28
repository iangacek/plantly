const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  commonName: { type: String },
  fertilizer: { type: String},
  img: { type: String},
  light: { type: String},
  petToxicity: { type: String},
  propagation: { type: String},
  scientificName: { type: String},
  soil: { type: String},
  water: { type: String},
  id: { type: Number }
});

module.exports = mongoose.model("garden", gardenSchema);
