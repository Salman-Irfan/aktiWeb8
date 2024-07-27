import axios from "axios"

export const fetchBookByIdService = async (bookId) => {
    const bookByIdResponse = await axios.get(`http://localhost:3000/read-book-by-id/${bookId}`)
    return bookByIdResponse.data
}