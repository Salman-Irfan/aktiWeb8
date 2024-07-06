const Book = require("../models/bookodel")

const readAllBooksController = async(req, res)=>{
    const allBooks = await Book.find()
    return res.json({
        success: true,
        allBooks
    })
}
module.exports = readAllBooksController