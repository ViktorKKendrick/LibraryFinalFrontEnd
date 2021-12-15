import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <Navbar className='border-bottom' bg="light" expand="lg">
            <Container className='text-center '>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/"> </Nav.Link>
                    </Nav>
                    <Navbar.Brand> MyLiberry </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}