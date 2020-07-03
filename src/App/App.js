import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from 'react-router-dom';
import HM from '../HM/HM.js';
import HomePage from '../HomePage/HomePage.js'
import logo from '../Img/jobal-Logo-White.png';
import './App.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';


export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage}/>
        {/* <Route exact path = "/about" component={About}/>
        <Route path = "/projects" component={Projects}/>
        <Route exact path = "/contact" component={Contact}/>
        <Route path = "/help" component={Help}/> */}
      </>
    )
  }
  render() {
    return (
      <Container fluid className='portfolio'>
        <Row>
        <nav className='App__nav'>
          <Link className="navLink" to={"/main"}>
            <img className='logo img' src={logo} alt='Logo'/>
          </Link>
          <div className="topnav">
            <div className="hamburger">
              <HM />
            </div>
          </div>
        </nav>
        </Row>
        <Card className='body'>
          <Card.Body>
            <main className='Main'>
              {this.renderMainRoutes()}
            </main>
          </Card.Body>
      </Card>
      </Container>
      // <div className='App'>
        // <nav className='App__nav'>
        //   <Link className="navLink" to={"/main"}>
        //     <img className='logo img' src={logo} alt='Logo'/>
        //   </Link>
        //   <div className="topnav">
        //     <div className="hamburger">
        //       <HM/>
        //     </div>
        //   </div>
        // </nav>
        // <main className='Main'>

        // </main>
        // <div className='footer'>
        //   <footer className='App__footer'>

        //   </footer>
        // </div>
      // </div>
    )
  }
}
