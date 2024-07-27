// services/fetchAllBooksService.js

import axios from 'axios';

export const fetchAllBooks = async () => {
    try {
        const response = await axios.get('http://localhost:3000/read-all-books');
        if (response.data.success) {
            return response.data.allBooks;
        } else {
            throw new Error('Failed to fetch books');
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};
