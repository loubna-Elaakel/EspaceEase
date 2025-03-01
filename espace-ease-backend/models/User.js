const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  telephone: { type: String },
  type_utilisateur: { type: String, enum: ['particulier', 'professionnel'], required: true },
  date_inscription: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
