const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); // استيراد نموذج العقارات

// 🏠 جلب جميع العقارات
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🏠 إضافة عقار جديد
router.post('/', async (req, res) => {
    const { titre, description, type, mode, prix, adresse, utilisateur_id } = req.body;

    const newProperty = new Property({
        titre,
        description,
        type,
        mode,
        prix,
        adresse,
        utilisateur_id
    });

    try {
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
