import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, Container} from "react-bootstrap"
import "./App.css"

function home() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="navMargin">
                <Navbar.Brand>Immigrant Parent</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        <h1>Home Page</h1>
        </div>
    );
}

export default home;
