const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  mode: { type: String, required: true },
  ville: { type: String, required: true },
  image: { type: String, required: true },
  addres: { type: String },
});

module.exports = mongoose.model('Property', propertySchema);