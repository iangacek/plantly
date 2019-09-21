const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  id: { type: String, required: true, unique:true },
  commonName: { type: String, required:true },
  scientificName: { type: String, required: true },
  propagation: { type: String},
  light: { type: String},
  soil: { type: String},
  water: { type: String},
  fertilizer: { type: String},
  petToxicity: { type: String},
  img: { type: String}
});

module.exports = mongoose.model("plantdb", plantSchema);

