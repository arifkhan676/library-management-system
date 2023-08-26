import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Bookcard.css'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalOpen from './ModalOpen';

const Bookcard = (props) => {

    const [open, setOpen] = useState(false);

    const handleShow = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const [review, setreview] = useState({
        name: '',
        feedback: ''
    });

    const handleChangee = (e) => {
        const { name, value } = e.target;
        setreview((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        //  const { name, feedback } = review;
        console.log(review);
        setreview({
            ...review,
            name: '',
            feedback: ''
        })
        e.preventDefault();

    }


    const { title, src, description } = props.Bookdetails;
    return (
        <div>
            <Card style={{ width: '18rem', margin: '15%' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title> {title}</Card.Title>
                    <Card.Text>{description}  </Card.Text>
                    <div className="button">
                        <Button onClick={() => { props.handleClick(props.Bookdetails) }} variant="primary">Borrow Request</Button>
                        <Button onClick={handleShow} variant="warning">See Review</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={open} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Give your feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form method='POST' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                placeholder="Your Name"
                                autoFocus
                                onChange={handleChangee}
                                value={review.name}
                            //onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Write Feedback</Form.Label>
                            <Form.Control
                                name='feedback'
                                type='textarea'
                                as="textarea"
                                onChange={handleChangee}
                                value={review.feedback}
                                rows={3} />
                        </Form.Group>
                        <Button variant="dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>


                <ModalOpen name={review.name}
                    feedback={review.feedback}
                />


            </Modal>

        </div>
    )
}

export default Bookcard
