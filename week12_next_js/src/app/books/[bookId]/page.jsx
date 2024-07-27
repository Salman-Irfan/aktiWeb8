import { fetchBookByIdService } from '@/services/fetchBookByIdService'
import React from 'react'

const BookDetails = async (props) => {

    const bookId = props.params.bookId
    console.log(bookId)
    const response = await fetchBookByIdService(bookId)
    console.log(response)
    return (
        <>

            <p>{response.details.bookName}</p>
            <p>{response.details.bookPrice}</p>
            <p>{response.details.bookAuthor}</p>
            <p>{response.details.bookDescription}</p>

        </>
    )
}

export default BookDetails