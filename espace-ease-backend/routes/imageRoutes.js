const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

// 🔹 Récupérer toutes les images
router.get('/', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Ajouter une nouvelle image
router.post('/', async (req, res) => {
    const newImage = new Image(req.body);
    try {
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
