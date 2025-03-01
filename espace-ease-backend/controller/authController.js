const bcrypt = require('bcryptjs'); // Pour le hachage et la comparaison des mots de passe
const jwt = require('jsonwebtoken'); // Pour générer les tokens JWT
const User = require('../models/User'); // Modèle utilisateur

// 🟢 Inscription d'un utilisateur
const registerUser = async (req, res) => {
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
};

// 🟢 Connexion d'un utilisateur
const loginUser = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    // Validation des champs
    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: "Email et mot de passe sont obligatoires." });
    }

    try {
        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Utilisateur non trouvé." });
        }

        // Comparer le mot de passe
        const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect." });
        }

        // Générer un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Renvoi du token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🟢 Réinitialisation du mot de passe (optionnel)
const resetPassword = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: "Email et mot de passe sont obligatoires." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Utilisateur non trouvé." });
        }

        // Hachage du nouveau mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

        // Mise à jour du mot de passe
        user.mot_de_passe = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Mot de passe mis à jour avec succès." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🟢 Forget password (optionnel) - Demander un réinitialisation de mot de passe par email (exemple)
const forgetPassword = async (req, res) => {
    // Ici tu devrais envoyer un lien pour réinitialiser le mot de passe, mais il faut un email service
    res.status(200).json({ message: "Email envoyé pour la réinitialisation." });
};

module.exports = { registerUser, loginUser, resetPassword, forgetPassword };
