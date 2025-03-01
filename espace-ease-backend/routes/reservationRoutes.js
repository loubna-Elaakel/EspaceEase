const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// 🔹 Récupérer toutes les réservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Ajouter une nouvelle réservation
router.post('/', async (req, res) => {
    const newReservation = new Reservation(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
