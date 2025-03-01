const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['immobilier', 'voiture'], required: true },
  mode: { type: String, enum: ['vente', 'location'], required: true },
  prix: { type: Number, required: true },
  adresse: { type: String },
  statut: { type: String, enum: ['disponible', 'reserve', 'vendu'], default: 'disponible' },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date_ajout: { type: Date, default: Date.now }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
