const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// 🔹 Récupérer tous les avis
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Ajouter un nouvel avis
router.post('/', async (req, res) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
