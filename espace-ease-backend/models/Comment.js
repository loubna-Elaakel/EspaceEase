const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  contenu: { type: String, required: true },
  date_commentaire: { type: Date, default: Date.now },
  expediteur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destinataire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propriete_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: false }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
