const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  userName: { type: String },
  gardenName: { type: String},
  plants: [{
    type:Schema.Types.ObjectId,
    ref:"plantdb"
  }]
});

module.exports = mongoose.model("garden", gardenSchema);

