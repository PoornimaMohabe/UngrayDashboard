const mongoose = require('mongoose');

const ComparisonSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    lastYear: {
        type: Number,
        required: true
    },
    thisYear: {
        type: Number,
        required: true
    }
});

const ComparisonModel = mongoose.model('compariosn', ComparisonSchema);

module.exports = {
    ComparisonModel
}

