import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import {Route} from "react-router-dom"
import home from "./home"
import login from "./login"
import signup from "./signup"
import dashboard from "./dashboard"

function App() {
  const [IntialData, setIntialData] = useState([{}])

  useEffect(() => {
      fetch('/main').then(
          response => response.json()
      ).then(data => console.log(data))
  });

  return (
    <div>
      <Route exact path="/" component={home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/dashboard" component={dashboard} />
    </div>
  );
}

export default App;
