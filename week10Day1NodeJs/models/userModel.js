const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: String,
    userAge: Number,
    userEmail: String,
    userPassword: String,
}, {
    timestamps: true,
});

const User = mongoose.model(`users`, userSchema)
module.exports = User;