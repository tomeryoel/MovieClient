import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';  // Importing Material-UI Button
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <Navbar bg='dark' variant='dark' expand='lg' >
            <Container fluid>
                <Navbar.Brand href='/' style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />  Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    {/* Updated Buttons with Material-UI */}
                    <Button variant="outlined" color="info" className="me-2">Login</Button>
                    <Button variant="outlined" color="info">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
