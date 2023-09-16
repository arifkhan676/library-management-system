import React from 'react'
import './Selectcard.css'
import Button from 'react-bootstrap/Button';


const SelectCard = (props) => {
    const { id, title, src, description } = props.selectBook;

    return (
        <div className="selectBook">
            <div className='select'>
                <div className="title">
                    <h5> Book title: {title} </h5>
                    <p  >{description}</p>
                </div>
                <div className="img">
                    <img className='select-img' src={src} alt="" />
                </div>
            </div>
            <Button onClick={() => { props.handleDelete(id) }} variant="danger">Delete</Button>
        </div>

    )
}

export default SelectCard
