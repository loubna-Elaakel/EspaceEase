const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date_transaction: { type: Date, default: Date.now },
  montant: { type: Number, required: true },
  type_transaction: { type: String, enum: ['achat', 'location'], required: true },
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propriete_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
