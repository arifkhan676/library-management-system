import React, { useState } from 'react'
import './nav.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { auth, provider } from '../../firebase.config';
import { signInWithPopup } from 'firebase/auth';

const NavbarMenu = () => {

    const [googleData, setGoogleData] = useState(
        {
            isLogin: false,
            name: '',
            email: '',
            photoURL: ''
        }
    );


    const googleLogin = () => {
        signInWithPopup(auth, provider).then(res => {
            const { displayName, email, photoURL } = res.user;
            // console.log(res.user)
            const newUser = {
                isLogin: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            }
            setGoogleData(newUser)

        })
    }
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
                                <a class="nav-link" href="#">Library <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Student Entry</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Total Books</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Seat Book</a>
                            </li>
                            <li class="nav-item">
                                {googleData.isLogin && <img style={{ width: '50px', borderRadius: '25px' }} src={googleData.photoURL} alt="" />}
                            </li>
                        </ul>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Button variant="outline-dark">Users</Button>
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <button className="dropdown-item" onClick={googleLogin} >
                                    {googleData.isLogin === false ? 'Login' : 'Logout'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavbarMenu
