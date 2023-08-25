import React, { useState } from 'react'
import './home.css'
import Bookcard from './Bookcard';
import { BookData } from '../BookData/BookData';
import SelectCard from './SelectCard';

const Home = () => {

    const [selectCard, setSelectCard] = useState([]);

    const handleClick = (bookid) => {
        const selectBook = BookData.find(book => book.id === bookid);
        setSelectCard(selectBook)
    }
    console.log(selectCard);

    return (
        <div className='Home'>
            <div className="book-card">
                {
                    BookData.map(book => {
                        return <Bookcard
                            id={book.id}
                            title={book.title}
                            src={book.src}
                            description={book.description}
                            handleClick={handleClick}
                        />
                    })
                }
            </div>
            <div className="select-book">
                <h1>Selected Books</h1>
                <h3> Book Title:  {selectCard.title} </h3>
            </div>
        </div>
    )
}

export default Home

