const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: String,
    bookPrice: Number,
    bookAuthor: String,
    bookDescription: String,
}, {
    timestamps: true,
});

const Book = mongoose.model(`Books`, bookSchema)
module.exports = Book;