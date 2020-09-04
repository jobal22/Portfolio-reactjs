import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from 'react-router-dom';
import HM from '../Components/HM/HM.js';
import HomePage from '../Components/HomePage/HomePage.js';
import Experience from '../Components/Experience/Experience.js';
import Projects from '../Components/Projects/Projects.js';
import logo from '../Img/jobalLogo5.png';
import './App.css';
import { Container, Row, Card } from 'react-bootstrap';


export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage}/>
        <Route exact path = "/experience" component={Experience}/>
        <Route path = "/projects" component={Projects}/>
        {/* <Route exact path = "/contact" component={Contact}/>
        <Route path = "/help" component={Help}/> */}
      </>
    )
  }
  render() {
    return (
      // <Container fluid className='portfolio'>
      //   <Row>
      //   <nav className='App__nav'>
      //     <Link className="navLink" to={"/"}>
      //       <img className='logo img' src={logo} alt='Logo'/>
      //     </Link>
      //     <div className="topnav">
      //       <div className="hamburger">
      //         <HM />
      //       </div>
      //     </div>
      //   </nav>
      //   {/* <NavDropdown /> */}
      //   </Row>
      //   <Card className='body'>
      //     <Card.Body>
      //       <main className='Main'>
      //         {this.renderMainRoutes()}
      //       </main>
      //       <div className='footer'>
      //         <footer className='App__footer'>
      //           Hope to see you soon!
      //         </footer>
      //       </div>
      //     </Card.Body>
      // </Card>
      // </Container>
      <div className='App'>
        <nav className='App__nav'>
          <Link className="navLink" to={"/"}>
            <img className='logo img' src={logo} alt='Logo'/>
          </Link>
          <div className="topnav">
            <div className="hamburger">
              <HM/>
            </div>
          </div>
        </nav>
        <main className='Main'>
          {this.renderMainRoutes()}
        </main>
        <div className='footer'>
          <footer className='App__footer'>
            <p>Hope to see you soon!</p>
          </footer>
        </div>
      </div>
    )
  }
}
