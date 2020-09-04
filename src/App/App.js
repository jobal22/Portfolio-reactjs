import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from 'react-router-dom';
import HM from '../Components/HM/HM.js';
import HomePage from '../Components/HomePage/HomePage.js';
import Experience from '../Components/Experience/Experience.js';
import Projects from '../Components/Projects/Projects.js';
import logo from '../Img/jobalLogo5.png';
import shine from '../Img/bulbOn.png';
import './App.css';


export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage}/>
        <Route exact path = "/experience" component={Experience}/>
        <Route path = "/projects" component={Projects}/>
      </>
    )
  }
  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Link className="navLink" to={"/"}>
            <img className='logo img' src={logo} alt='Logo'/>
            <img className='logo2 img' src={shine} alt='Shine'/>
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
