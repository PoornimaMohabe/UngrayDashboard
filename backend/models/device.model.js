const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    date: {
        type: String
     
    },
   websales : {
        type: Number,
        required: true
    },
    offlinesale: {
        type: Number,
        required: true
    }
});

const DeviceonModel = mongoose.model('devicedata', deviceSchema);

module.exports = {
    DeviceonModel
}

