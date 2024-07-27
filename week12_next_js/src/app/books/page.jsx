import { fetchAllBooks } from '@/services/fetchAllBooksService'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const Books = async () => {


    const booksResponseData = await fetchAllBooks() //
    console.log(booksResponseData)

    return (
        <>
            <p>a huge paragraph for books</p>
            {
                booksResponseData.map((book) => (
                    <li key={book._id}>
                        <Link href={`/books/${book._id}`}>
                            <p>{book.bookName}</p>
                            <p>{book.bookPrice}</p>
                            <p>{book.bookAuthor}</p>
                            <p>{book.bookDescription.slice(0, 20)}... Read More</p>
                        </Link>
                    </li>
                ))
            }

        </>
    )
}

export default Books