const mongoose = require("mongoose");

const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: "team",
    required: true,
  },
});

module.exports = mongoose.model("EstepaPlayer", playerSchema);
