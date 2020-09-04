import React, { Component } from 'react';
import SClogo from './Img/SCLogoBig.png';
import AboutUs from './SCComponents/AboutUs/AboutUs';
import './SCApp.css';

export default class App extends Component {
  render() {
    return (
      <div className='SCApp-container'>
        <div className='content-wrap'>
          <div className='SCApp__nav'>
              <img className='SClogo img' src={SClogo} alt='SClogo'/>
          </div>
          <div>
            <AboutUs />
          </div>
        </div>
      </div>
    )
  }
}
