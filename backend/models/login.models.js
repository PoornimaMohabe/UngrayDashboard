const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
 
},
    {
        versionKey: false
    });

const UserModel = mongoose.model("userDetails", userSchema);

module.exports = {
    UserModel
}