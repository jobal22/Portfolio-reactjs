import React, { Component } from 'react';
import logo from './Img/logo2.png';
import TLMenu from './TLMenu/TLMenu';
import './TLApp.css';

export default class App extends Component {
  render() {
    return (
      <div className='TLApp'>
        <div className='TLAppNavDiv'>
        <nav className="TLApp__nav header-w is-scrolling">
            <img className='TLlogo TLimg TLheadtitle' src={logo} alt='Logo'/>
            <h1 className='TLlogoTitle TLheadtitle'>1T3 LIFE</h1>
          <hr className='TLhrHead'></hr>
        </nav>
        </div>
        <div>
          <TLMenu />
        </div>
        <footer className='TLApp__footer'>
          <p className='TLfooterText'>To God be the glory!<br></br>
          All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
        </footer>
      </div>
    )
  }
}
