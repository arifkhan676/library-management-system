import React from 'react'
import './nav.css'
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img className='nav-img' src="https://th.bing.com/th/id/OIP.VfiAsoTR0impBvTd3guKogHaBd?pid=ImgDet&rs=1" alt="" />
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li>Library</li>
                            <li>Student Entry</li>
                            <li>Total Books</li>
                            <li>Seat Book</li>
                        </ul>
                    </div>
                    <div className="panel">
                        <Button variant="outline-dark">Student Log In</Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
