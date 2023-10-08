import React, { useContext, useState } from 'react'
import './home.css'
import Bookcard from './Bookcard';
import { BookData, BookData2 } from '../BookData/BookData';
import SelectCard from './SelectCard';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';
import { ContextAPI } from '../../App';

const Home = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)


    const [selectCard, setSelectCard] = useState([]);

    const handleClick = (bookid) => {
        const newBooks = [...selectCard, bookid]
        setSelectCard(newBooks)
        setGoogleData({ lengthVal: newBooks })

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
                {
                    BookData2.map(book => {
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
                <Button onClick={handleBorrow} style={{ marginLeft: '15px', marginBottom: '30px' }} variant='warning' > Confirm to borrow   </Button>
            </div>
        </div>

    )
}

export default Home

