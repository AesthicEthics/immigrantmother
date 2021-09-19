import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, Button, Col, Container, Form, Row} from "react-bootstrap"
import "./App.css"

function Login() {
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
            
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
                    <div className="formbox">
                        <h1 className="mt-5 p-3 text-center rounded formh1">Login</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <div className="formLabel">
                                    <Form.Label>Email address</Form.Label>
                                </div>
                                <Form.Control type="email" placeholder="Enter email" className="formField" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <div className="formLabel">
                                    <Form.Label >Password</Form.Label>
                                </div>
                                <Form.Control type="password" placeholder="Password" className="formField" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit" className="sendButton" >
                                Login
                            </Button>
                        </Form>
                    </div>
                    <div className="div-link">
                        <Nav.Link href="/signup" className="link" >
                            <p> Don't have an account? Sign up here </p>
                        </Nav.Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
