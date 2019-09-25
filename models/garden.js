const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  username: { type: String, required:true },
  userplants: { type: Array}
});

module.exports = mongoose.model("garden", gardenSchema);
