const Book = require("../models/bookodel")

const createBookController = async(req, res) => {
    const bookData = req.body

    const book = new Book(bookData)

    const mongoBookResponse = await book.save()

    return res.json({
        success: true,
        mongoBookResponse
    })
}
module.exports = createBookController