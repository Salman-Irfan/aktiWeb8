import axios from 'axios';
import React, { useState } from 'react';

const BooksPage = () => {
    const [bookForm, setBookForm] = useState({
        bookName: ``,
        bookPrice: null,
        bookAuthor: ``,
        bookDescription: ``
    })
    const [count, setCount] = useState(0)

    const handleCount = (e) => {
        e.preventDefault();
        setCount(count + 3)
    }
    // handleInputChange
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookForm({
            ...bookForm,
            [name]: value
        });
    }

    const handleBookSubmit = async (e) => {
        e.preventDefault();
        
        // towards http node server
        // 1. node server, 127.0.0.1:5173 (react)
        // 2. node server, 127.0.0.1:3000 (node express server)
        try {
            const createBookApiResponse = await axios.post(`http://127.0.0.1:3000/create-book`, bookForm)
            console.log(createBookApiResponse)
            if (createBookApiResponse.data.success){
                alert(`book added successfully!`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleBookSubmit}>
            <input
                type="text"
                name="bookName"
                id="bookName"
                placeholder="bookName"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="bookPrice"
                id="bookPrice"
                placeholder="bookPrice"
                onChange={handleInputChange}
            />

            <input
                type="text"
                name="bookAuthor"
                id="bookAuthor"
                placeholder="bookAuthor"
                onChange={handleInputChange}
            />

            <input
                type="text"
                name="bookDescription"
                id="bookDescription"
                placeholder="bookDescription"
                onChange={handleInputChange}
            />

            <button type="submit"  >Add Book</button>

            <button onClick={handleCount}>Count: {count}</button>
        </form>
    );
};

export default BooksPage;
