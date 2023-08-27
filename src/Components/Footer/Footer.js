import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            {date}
        </div>
    )
}

export default Footer
