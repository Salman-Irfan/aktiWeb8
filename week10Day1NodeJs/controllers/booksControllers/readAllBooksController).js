const Book = require("../../models/bookModel")

const readAllBooksController = async(req, res)=>{
    const allBooks = await Book.find()
    return res.json({
        success: true,
        allBooks
    })
}
module.exports = readAllBooksController