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
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="#">
                        Link
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
