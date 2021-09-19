import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import {Route} from "react-router-dom"
import home from "./home"
import about from "./about"
import login from "./login"
import signup from "./signup"

function App() {
  const [IntialData, setIntialData] = useState([{}])

  useEffect(() => {
      fetch('/main').then(
          response => response.json()
      ).then(data => setIntialData(data))
  });

  return (
    <div>
      <Route exact path="/" component={home} />
      <h1>{IntialData.title}</h1>
      <Route exact path="/about" component={about} />
      <Route exact path="/login" component={login} />
      <Route exact path="/signup" component={signup} />
    </div>
  );
}

export default App;