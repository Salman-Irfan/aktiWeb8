const mongoose  = require("mongoose");

const bookSchema = new mongoose.Schema({ 
    bookName: String,
    bookPrice: Number,
    bookAuthor: String,
    bookDescription: String,
});

const Book = mongoose.model(`Books`, bookSchema)
module.exports = Book;