import React, { useContext, useState } from 'react'
import './nav.css'
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { ContextAPI } from '../../App';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavbarMenu = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)


    console.log(googleData);

    return (

        <div className='navbaar'>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark mb-3 " >
                    <Container fluid>
                        <Navbar.Brand >
                            <NavLink to='/' >  <img className='nav-img' src="https://i.ibb.co/wgFD45M/uits-logo-removebg-preview.png" alt="" /> </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle className='bg-grey' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="bg-dark"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <NavLink to='/' >  <img className='nav-img' src="https://i.ibb.co/wgFD45M/uits-logo-removebg-preview.png" alt="" /> </NavLink>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                                    <Nav.Link href="#action1"  >
                                        <Link class="nav-link" to="/" style={{ color: 'white' }}  > Library <span class="sr-only">(current)</span></Link>
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Link class="nav-link" to="/StudentEntry" style={{ color: 'white' }}  >Student Entry</Link>
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Link class="nav-link" to="/TotalBooks" style={{ color: 'white' }}  >Total Books</Link>
                                    </Nav.Link>

                                    <Nav.Link style={{ display: 'flex' }} >

                                        <NavDropdown
                                            title={<Button variant="outline-success" style={{ marginTop: '-10px', color: 'white' }} >Users</Button>}
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >

                                            <NavDropdown.Item >
                                                <Link to='Login'   > Log In </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item >
                                                <Link to='Signin' > Sign In </Link>
                                            </NavDropdown.Item>
                                            {googleData.email && <button onClick={() => { setGoogleData({}) }} className="dropdown-item"  >
                                                <Link to='Signin'  > Sign Out </Link>
                                            </button>}
                                        </NavDropdown>


                                        <NavDropdown
                                            title={googleData.isLogin && <img style={{ width: '50px', borderRadius: '25px' }} src={googleData.photoURL} alt="" />}

                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item >
                                                <Link to='Login' style={{ color: 'white' }}  > {googleData.name} </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                    </Nav.Link>


                                </Nav>

                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" style={{ color: 'white' }} >Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>

    )
}

export default NavbarMenu

