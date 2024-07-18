const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    score: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const ScoreModel = mongoose.model('score', scoreSchema);

module.exports = {
    ScoreModel
}

