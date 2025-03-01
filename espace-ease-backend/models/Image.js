const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_ajout: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
