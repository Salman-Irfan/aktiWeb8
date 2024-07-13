const Book = require("../models/bookodel")

const readBookByIdController = async (req, res) => {
    try {
        const { id } = req.params

        const bookById = await Book.findById(id)

        return res.json({
            success: true,
            message: `book by id`,
            details: bookById
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
    
}
module.exports = readBookByIdController