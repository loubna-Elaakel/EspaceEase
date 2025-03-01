const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  note: { type: Number, min: 1, max: 5, required: true },
  commentaire: { type: String },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propriete_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  date_avis: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
