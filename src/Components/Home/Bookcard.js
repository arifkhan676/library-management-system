import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Bookcard.css'

const Bookcard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '15%' }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title> {props.title}</Card.Title>
                    <Card.Text>{props.description}  </Card.Text>
                    <div className="button">
                        <Button onClick={() => { props.handleClick(props.id) }} variant="primary">Borrow Request</Button>
                        <Button variant="warning">See Review</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Bookcard
