const Book = require("../models/bookodel")

const updateBookByIdController = async (req, res) => {
    const { bookName, bookPrice, bookAuthor, bookDescription } = req.body
    const {id} = req.params
    const updatedBook = await Book.findByIdAndUpdate(
        id,
        {
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuthor: bookAuthor,
            bookDescription: bookDescription
        },
        { new: true }
    )
    return res.json ({
        success: true,
        message : `updated successfully`,
        details: updatedBook,
    })
}
module.exports = updateBookByIdController