import {Navbar, Nav, NavItem} from 'react-bootstrap'
import React from 'react'


export default class Navigation extends React.Component{

    constructor(){
        super();
        this.Constants = {
            ABOUT: document.getElementById("ABOUT"),
            CONTACT: document.getElementById("CONTACT"),
            SERVICES: document.getElementById("SERVICES"),
            PRODUCTS: document.getElementById("PRODUCTS")
        }
    }

    scrollDown(target){
        let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        let scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 20);
        };
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }

    render(){
        const constants = this.Constants;
        return(
            <Navbar>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                    <NavItem onClick={()=>{this.scrollDown(document.getElementById("ABOUT"))}} eventKey={4} href="#">
                        About Us
                    </NavItem>
                    <NavItem onClick={()=>{this.scrollDown(document.getElementById("PRODUCTS"))}} eventKey={2} href="#">
                        Products
                    </NavItem>
                    <NavItem onClick={()=>{this.scrollDown(document.getElementById("SERVICES"))}} eventKey={1} href="#">
                        Services
                    </NavItem>

                    <NavItem onClick={()=>{this.scrollDown(document.getElementById("CONTACT"))}} >
                        Contact Us
                    </NavItem>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
