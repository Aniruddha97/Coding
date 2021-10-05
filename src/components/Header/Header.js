import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUniversity } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                <FontAwesomeIcon icon={faUniversity} />{' '}
                Coding-school
                </Navbar.Brand>
                <Nav className="justify-content-around">
                <NavLink className="navlink" to="/home">Home</NavLink>
                <NavLink className="navlink" to="/services">Services</NavLink>
                <NavLink className="navlink" to="/about">About Us</NavLink>
                <NavLink className="navlink" to="/teach">Connecting with us</NavLink>
                </Nav>
            </Container>
                
            </Navbar>           
        </div>
    );
};

export default Header;
