import React from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Topbar() {
    const stylelogo = { width: 40, height: 40 }
    const stylenoti = { width: 35, height: 35 }
    const stylelayout = { margintop: 90 }
    return (

        <div className="Topbar">
            <Navbar className="homenav" collapseOnSelect expand="lg" variant="dark">
                <div className="Logo" >
                    <Image style={stylelogo} src="Logo.png" />
                </div>
                <div className="NameLogo">
                    <Navbar.Brand style={stylelayout} href="#home">Smart Manage</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="TextFeatures">
                            <Nav.Link href="#features">Features</Nav.Link>
                        </div>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className="picnoti">
                            <Image style={stylenoti} src="notification.png" />
                        </div>
                        <div className="TextNoti">
                            <Nav.Link href="#deets">Notification</Nav.Link>
                        </div>
                        <Nav.Link eventKey={2} href="#memes">
                            <div className="TextLogin">
                                Log in
               </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>


    );
}
