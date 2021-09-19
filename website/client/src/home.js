import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container} from "react-bootstrap";
import "./App.css";

function Home() {


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="navMargin">
                <Navbar.Brand>Immigrant Parent</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
                {/* <Nav>
                    <Nav.Link href="/signout">Sign out</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="headingDiv">
                <h1 className="heading">Homepage</h1>
            </div>  
            <div className="homediv">
                <p className="homeP">We made a machine that yells at you or slaps you if you start losing focus or falling asleep while working, kind of like your immigrant mother.</p>
                <p className="homeP">Using a Brain-Computer Interface, we collect brainwave data and run it through a focus/relaxation machine learning model to determine a person’s level of concentration and alertness while they are working or in a study session.</p> 
                <p className="homeP">When it detects that they are losing focus, there are 2 different levels of increasing consequence that the machine will take; an insult yelled at them and a slap in the face</p>
                <p className="homeP">The machine will simply yell at them first with an insult, bringing them back to alertness. After getting yelled at 3 times, they will receive a slap in the face.</p>
                
            </div>
        </div>
    );
}

export default Home;
