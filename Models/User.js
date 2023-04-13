const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    favClass: {
        type: [String],
        default: []
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// model declared 
module.exports = mongoose.model('user', UserSchema)