import React from 'react'
import { useParams } from 'react-router-dom'
import { BookData } from '../BookData/BookData';
import Bookcard from '../Home/Bookcard';
import './Books.css'

const Books = (props) => {

    const { bookId } = useParams();
    const getBooks = BookData.find(book => book.id === bookId)
    // console.log(getBooks);
    return (
        <div className='books-page' >
            <Bookcard Bookdetails={getBooks} />
        </div>
    )
}

export default Books
