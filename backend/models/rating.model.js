const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    negative: {
        type: Number,
        required: true
    },
    positive: {
        type: Number,
        required: true
    },
    neutral: {
        type: Number,
        required: true
    }
});

const RatingModel = mongoose.model('rating', ratingSchema);

module.exports = {
    RatingModel
}

