import React, { useContext, useState } from 'react'
import './nav.css'
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { ContextAPI } from '../../App';



const NavbarMenu = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)


    console.log(googleData);

    return (
        <div>
            <nav className='navbar navbar-expand-lg' >
                <div className="logo">
                    <NavLink to='/' >  <img className='nav-img' src="https://th.bing.com/th/id/OIP.VfiAsoTR0impBvTd3guKogHaBd?pid=ImgDet&rs=1" alt="" /> </NavLink>
                </div>
                <div className="navbar">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">

                                <Link class="nav-link" to="/">Library <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/StudentEntry">Student Entry</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/TotalBooks">Total Books</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/SeatBook">Seat Book</Link>
                            </li>
                            <li class="nav-item">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {googleData.isLogin && <img style={{ width: '50px', borderRadius: '25px' }} src={googleData.photoURL} alt="" />}
                                    </a>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <button className="dropdown-item"  >
                                            <Link to='Login' > {googleData.name} </Link>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Button variant="outline-dark">Users</Button>
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">

                                <button className="dropdown-item"  >
                                    <Link to='Login' > Log In </Link>
                                </button>

                                <button className="dropdown-item"  >
                                    <Link to='Signin'> Sign In </Link>
                                </button>
                                {googleData.email && <button onClick={() => { setGoogleData({}) }} className="dropdown-item"  >
                                    <Link to='Signin'> Sign Out </Link>
                                </button>}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavbarMenu
