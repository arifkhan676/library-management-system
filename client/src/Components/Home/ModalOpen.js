import React from 'react'

const ModalOpen = (props) => {
    return (
        <div style={{ textAlign: 'left' }}  >
            <hr />
            <div >
                <h6 >Author: {props.name} </h6>
                <p> Feedback: {props.feedback} </p>
            </div>
        </div>
    )
}

export default ModalOpen
