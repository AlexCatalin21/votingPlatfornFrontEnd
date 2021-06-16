import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../resources/logo.png";

export default function AppNavbar() {
  const [userIsLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (window.sessionStorage.getItem("userEmail")) {
      setIsLogin(true);
      setFirstName(window.sessionStorage.getItem("firstName"));
    }
  }, []);

  return (
    <div>
      <Navbar bg="success" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/campaigns">Campaigns</Nav.Link>
            {userIsLogin ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Sign in</Nav.Link>
            )}
          </Nav>
          <Nav inline>
            {userIsLogin ? (
              <div className="mr-sm-2"> Welcome {firstName} </div>
            ) : (
              <Nav.Link href="/register" className="mr-sm-2">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
const logoStyle = {
  width: "90%",
  height: "70%",
};
