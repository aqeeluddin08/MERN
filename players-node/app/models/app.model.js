const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
id:Number,
  name: String,
  field_goals:String,
  touchdown_passes:String,
  rushing_yard:String,
  sacks:String
});

module.exports = mongoose.model("App", AppSchema);