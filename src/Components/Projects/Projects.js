import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import bulb1 from '../../Img/bulb1.png';
import bulb2 from '../../Img/bulb2.png';
import Sparrows from '../SparrowsCoffee/SCApp'
import TLife from '../1T3Life/TLApp'

import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1 className='projh'>Projects</h1>
        <div className='projects__content'>
          <div className='LTBG' />
          <div className='project__one'>
            <div className='projContent'>
              {/* <img className='bulb' src={bulb1} alt='one bulb'/> */}
              <div className='prObg' />
              <h2>Sparrows Coffee</h2>
              <p>This front-end app allows users to access information about Sparrows Coffee. Users are able to read information, get pricing, book events, and email the company for more information.</p>
              <p>Technologies Used: React.js, Enzyme, HTML, CSS</p>
              <p>Demo:</p>
            </div>
            <div className='project__one__example'>
              <Sparrows className='project__sparrows'/>
            </div>
          </div>
          <div className='projectLinkContainer'>
            <a className='projectLinks' href='https://sparrowscoffeega.com/' target='_blank'>Live Link</a>
            <a className='projectLinks' href='https://github.com/jobal22/sparrows-coffee' target='_blank'>GitHub Link</a>
          </div>
          <div className='project__two'>
            <div className='projContent'>
              <div className='prTbg' />
              <h2>1T3 Life</h2>
              <p>This app allows users to access content for theological training purpose. The user can also download selected content in pdf format. The App displays twelve squares to select. Each square directs the user to a content page, which allows the user to view the content and download the content.</p>
              <p>Technologies Used: React.js, Enzyme, HTML, CSS</p>
              <p>Demo:</p>
            </div>
            <div className='project__two__example'>
              <TLife className='project__1T3Life' />
            </div>
          </div>
          <div className='projectLinkContainer'>
            <a className='projectLinks' href='https://www.1t3life.org/' target='_blank'>Live Link</a>
            <a className='projectLinks' href='https://github.com/jobal22/1T3LIFE-trial-app' target='_blank'>GitHub Link</a>
          </div>
        </div>
      </div>
    )
  }
}
