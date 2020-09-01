import React, { Component } from 'react';
import '../Projects/node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from '../Img/jobal-Logo-White2.png';



export default class NavBar extends Component {
  render() {
    return (
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/">
            <Image src={logo}/>
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="2" href="/education">Education</NavDropdown.Item>
          <NavDropdown.Item eventKey="2" href="/projects">Projects</NavDropdown.Item>
          <NavDropdown.Item eventKey="2" href="/projects">Contact</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    )
  }
}
