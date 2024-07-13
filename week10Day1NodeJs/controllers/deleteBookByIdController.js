const Book = require("../models/bookodel")

const deleteBookByIdController = async (req, res) => {
    const { id } = req.params
    console.log(id)

    const deletedBook = await Book.findByIdAndDelete(id)
    console.log(deletedBook)
    return res.json({
        success: true,
        message: `book deleted successfully`,
        details: deletedBook
    })
}

module.exports = deleteBookByIdController