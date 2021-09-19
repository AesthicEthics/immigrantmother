import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, Button, Col, Container, Form, Row} from "react-bootstrap"
import "./App.css"
import {useForm} from "react-hook-form"

function Signup() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    //const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const {register, watch, handleSubmit, reset, formState: {errors}} = useForm();

    const submitForm = (data)=> {
        console.log(data);
        
        const body = {
            FirstName: data.FirstName,
            LastName: data.LastName,
            Password: data.Password
        }

        const requestOptions={
            method: "POST",
            cache: "no-cache",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("/signup", requestOptions)
        .then(response=> {
            return response.json()})
        .then(data=>console.log(data))
        .then(err=>console.log(err))

        reset();
    }
    console.log(watch("FirstName"))
    console.log(watch("LastName"))
    //console.log(watch("Email"))
    console.log(watch("Password"))
    

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
                        <h1 className="mt-5 p-3 text-center rounded formh1">Sign Up</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <div className="formLabel">
                                    <Form.Label>Name</Form.Label>
                                </div>
                                <Form.Control type="text" placeholder="First name" className="formField" {...register("FirstName", {required:true, maxLength: 25})} />
                                <Form.Control type="text" placeholder="Last name" className="formField" {...register("LastName", {required:true, maxLength: 25})} />
                                {(errors.FirstName || errors.LastName) && <span style={{color: "red"}}>Name is required</span> }
                            </Form.Group>

                            {/* <Form.Group controlId="formBasicEmail">
                                <div className="formLabel">
                                    <Form.Label>Email address</Form.Label>
                                </div>
                                <Form.Control type="email" placeholder="Enter email" className="formField" {...register("Email", {required:true, maxLength: 30})} />
                                {errors.Email && <span style={{color: "red"}}>Email is required</span> }
                            </Form.Group> */}

                            <Form.Group controlId="formBasicPassword">
                                <div className="formLabel">
                                    <Form.Label >Password</Form.Label>
                                </div>
                                <Form.Control type="password" placeholder="Password" className="formField" {...register("Password", {required:true, minLength: 8})} />
                                {errors.Password && <span style={{color: "red"}}>Password has to be atleast 8 characters</span> }
                            </Form.Group>

                            <Button as="sub" variant="success btn-block" type="submit" onClick={handleSubmit(submitForm)} className="sendButton" >
                                Login
                            </Button>
                        </Form>
                    </div>
                    <div className="div-link">
                        <Nav.Link href="/login" className="link" >
                            <p> Already have an account? Login here </p>
                        </Nav.Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Signup;