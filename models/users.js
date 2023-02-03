const mongoose = require('mongoose');
const { isEmail } = require('validator');

// ========== Import Database ==========
require('../config/config');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please enter a first name"],
        minLength: [3, "First name at least 3 characters long"],
    },
    last_name: {
        type: String,
        required: [true, "Please enter a last name"],
        minLength: [3, "Last name at least 3 characters long"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "This email already registered"],
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Password at least 8 characters long"]
    }
})

module.exports = mongoose.model('users', UserSchema);