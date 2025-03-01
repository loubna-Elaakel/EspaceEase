const express = require('express');
const router = express.Router();
const { registerUser, loginUser, resetPassword, forgetPassword } = require('../controllers/authController');

// 🟢 Route pour l'inscription d'un utilisateur
router.post('/register', registerUser);

// 🟢 Route pour la connexion d'un utilisateur
router.post('/login', loginUser);

// 🟢 Route pour la réinitialisation du mot de passe
router.post('/reset-password', resetPassword);

// 🟢 Route pour oublier le mot de passe
router.post('/forget-password', forgetPassword);

module.exports = router;
