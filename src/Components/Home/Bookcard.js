import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Bookcard.css'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalOpen from './ModalOpen';
import { Link, NavLink } from 'react-router-dom';

const Bookcard = (props) => {

    const [open, setOpen] = useState(false);

    const handleShow = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const [review, setreview] = useState({
        name: '',
        feedback: ''
    });
    const [author, setAuthor] = useState([]);

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
        console.log(author);
        setAuthor((preValue) => [...preValue, review])

        e.preventDefault();

    }

    /*  const useHistory = useHistory();
      const click = (id) => {
          const url = `/Books/${id}`
          useHistory.push(url);
      }
      <Card.Title> <NavLink to={() => { click(id) }}> {title} </NavLink>  </Card.Title>
  
      //evabeo use kora jay
  */

    const { title, src, description, id } = props.Bookdetails;

    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title> <NavLink to={`/Books/${id}`}> {title} </NavLink>  </Card.Title>
                    <Card.Text > {description}  </Card.Text>
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
                    <Form onSubmit={handleSubmit}>
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
                        <Button variant="dark" style={{ marginLeft: '10px' }} onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' style={{ marginLeft: '10px' }} variant="primary" >
                            Submit
                        </Button>
                    </Form>
                    <Modal.Title style={{ marginTop: '20px' }} > All Reviews </Modal.Title>

                    {
                        author.map((feedback) => {
                            return <ModalOpen name={feedback.name}
                                feedback={feedback.feedback}
                            />
                        })
                    }


                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Bookcard
