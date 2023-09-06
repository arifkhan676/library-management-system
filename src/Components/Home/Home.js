import React, { useState } from 'react'
import './home.css'
import Bookcard from './Bookcard';
import { BookData } from '../BookData/BookData';
import SelectCard from './SelectCard';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleBorrow = () => {
        navigate('/proceed')
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
                <h3 >Selected Books : {selectCard.length}  </h3>
                {selectCard.map(newbook => {
                    return <SelectCard
                        id={newbook.id}
                        selectBook={newbook}
                        handleDelete={handleDelete}
                    />
                })}
                <Button onClick={handleBorrow} style={{ marginLeft: '15px' }} variant='warning' > Confirm to borrow   </Button>
            </div>
        </div>
    )
}

export default Home

