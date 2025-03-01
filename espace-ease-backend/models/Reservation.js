const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  date_debut: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  montant_total: { type: Number, required: true },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propriete_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  statut: { type: String, enum: ['en_attente', 'confirme', 'annule'], default: 'en_attente' }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
