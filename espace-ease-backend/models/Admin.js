const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  telephone: { type: String },
  role: { type: String, enum: ['super_admin', 'moderateur'], required: true },
  date_inscription: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
