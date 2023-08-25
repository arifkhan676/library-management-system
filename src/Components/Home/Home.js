import React, { useState } from 'react'
import './home.css'
import Bookcard from './Bookcard';
import { BookData } from '../BookData/BookData';
import SelectCard from './SelectCard';

const Home = () => {

    const [selectCard, setSelectCard] = useState([]);

    const handleClick = (bookid) => {
        const newBooks = [...selectCard, bookid]
        setSelectCard(newBooks)
    }

    const handleDelete = (selectbook) => {
        const removeBook = selectCard.filter(book => book.id !== selectbook)
        setSelectCard(removeBook)
    }

    return (
        <div className='Home'>
            <div className="book-card">
                {
                    BookData.map(book => {
                        return <Bookcard
                            id={book.id}
                            Bookdetails={book}
                            handleClick={handleClick}
                        />
                    })
                }
            </div>
            <div className="select-book">
                <h3 >Selected Books</h3>
                {selectCard.map(newbook => {
                    return <SelectCard
                        id={newbook.id}
                        selectBook={newbook}
                        handleDelete={handleDelete}
                    />
                })}
            </div>
        </div>
    )
}

export default Home

