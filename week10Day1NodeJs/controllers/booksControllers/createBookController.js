const Book = require("../../models/bookModel")

const createBookController = async (req, res) => {
    try {
        const bookData = req.body

        const book = new Book(bookData)

        const mongoBookResponse = await book.save()

        return res.json({
            success: true,
            mongoBookResponse
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }

}
module.exports = createBookController