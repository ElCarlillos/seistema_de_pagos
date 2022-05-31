const mongoose = require("mongoose");

const Provider = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  company_id: Number,
  payment: Number,
  debt: Number
});

module.exports = mongoose.model("Provider", Provider);