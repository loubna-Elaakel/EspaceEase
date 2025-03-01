const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// 🔹 Récupérer toutes les transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Ajouter une nouvelle transaction
router.post('/', async (req, res) => {
    const newTransaction = new Transaction(req.body);
    try {
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
