import React from 'react'

const BooksPage = () => {
    
    return (
        <form>
            <input 
                type="text" 
                name="bookName" 
                id="bookName" 
                placeholder='bookName' 
            />
            
            <input 
                type="text" 
                name="bookPrice" 
                id="bookPrice" 
                placeholder='bookPrice' 
            />
            
            <input type="text" name="bookAuthor" id="bookAuthor" placeholder='bookAuthor' />
            <input type="text" name="bookDescription" id="bookDescription" placeholder='bookDescription' />
            <button type="submit">Add Book</button>
        </form>
    )
}

export default BooksPage