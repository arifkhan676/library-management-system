import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalComp = (props) => {



  return (
    <div>
      <Modal show={props.open} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Give your feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method='POST' onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name='name'
                placeholder="Your Name"
                autoFocus
                onChange={props.handleChangee}
                value={props.review.name}
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
                onChange={props.handleChangee}
                value={props.review.feedback}
                rows={3} />
            </Form.Group>
            <Button variant="dark" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleSubmit}>
              Submit
            </Button>
          </Form>
          <Modal.Body>
            <Modal.Title>{props.review.name}</Modal.Title>
            <hr />
            <Modal.Text > {props.review.feedback} </Modal.Text>
          </Modal.Body>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalComp
