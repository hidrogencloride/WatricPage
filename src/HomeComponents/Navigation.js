import {Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import React from 'react'


export default class Navigation extends React.Component{

    render(){
        return(
            <Navbar>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Services
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Products
                    </NavItem>
                    <NavItem>
                        Contact Us
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        About Us
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
