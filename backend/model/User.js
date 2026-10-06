const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, 
        minlength: 3, 
        maxlength: 30, 
        lowercase: true, 
        trim: true, 
        index: true 
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 6, 
        select: false 
    },
    role: { 
        type: String, 
        enum: ['admin', 'user'], 
        default: 'user' 
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);