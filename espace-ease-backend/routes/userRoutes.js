const express = require('express');
const bcrypt = require('bcryptjs'); // Hachage du mot de passe
const router = express.Router();
const User = require('../models/User'); // Modèle utilisateur

// 🟢 JEB LA KOLCHI (Récupérer tous les utilisateurs)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🟢 CREAER USER (Créer un nouvel utilisateur)
router.post('/', async (req, res) => {
    const { nom, email, mot_de_passe, telephone, type_utilisateur } = req.body;

    // Validation simple des champs
    if (!nom || !email || !mot_de_passe || !type_utilisateur) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet utilisateur existe déjà." });
        }

        // Hachage du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

        // Créer un nouvel utilisateur
        const newUser = new User({
            nom,
            email,
            mot_de_passe: hashedPassword,
            telephone,
            type_utilisateur
        });

        // Sauvegarder l'utilisateur dans la base de données
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
