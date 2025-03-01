const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// 🔹 Récupérer tous les commentaires
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Ajouter un nouveau commentaire
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
