import React, { useEffect, useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container, Overlay, Tooltip, Button} from "react-bootstrap";
import "./App.css";

function Dashboard() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

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
                <h1 className="heading">Dashboard</h1>
            </div>

            <div className="statsDiv">
                <div className="statsElements">
                    <p>Average Intention Span</p>
                    <p>20 minutes</p>
                </div>
                <div className="statsElements">
                    <p>Most Productive Time</p>
                    <p>2PM</p>
                </div>
                <div className="statsElements">
                    <p>Most Distracted Time</p>
                    <p>9PM</p>
                </div>
                <div className="statsElements">
                    <p>Maximum Time Focused</p>
                    <p>55 minutes</p>
                </div>
                <div className="statsElements">
                    <p>Total Slaps Collected</p>
                    <p>4</p>
                </div>
            </div>
            <br/>
            <div class="fade_rule"></div>  
            
            <div className="SessionsDiv">
                <div className="SessionData">
                    <div class="SessionHeader">
                        <h4>Session 1</h4>
                    </div>
                    <p>Average Intention Span: 30 minutes</p>
                    <p>Maximum Time Focused: 40 minutes</p>
                    <p>Slaps Taken: 0</p>
                </div>
                <div className="SessionData">
                    <div class="SessionHeader">
                        <h4>Session 1</h4>
                    </div>
                    <p>Average Intention Span: 10 minutes</p>
                    <p>Maximum Time Focused: 55 minutes</p>
                    <p>Slaps Taken: 3</p>
                </div>
                <div className="SessionData">
                    <div class="SessionHeader">
                        <h4>Session 1</h4>
                    </div>
                    <p>Average Intention Span: 20 minutes</p>
                    <p>Maximum Time Focused: 30 minutes</p>
                    <p>Slaps Taken: 1</p>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;
