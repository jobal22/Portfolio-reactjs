import React, { Component } from 'react';
import bulb1 from '../../Img/bulb1.png';
import Sparrows from '../SparrowsCoffee/SCApp'
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1>Projects</h1>
        <div className='projects__content'>
          <div className='project__one'>
            <div className='projContent'>
              <img className='bulb' src={bulb1} alt='one bulb'/>
              <h2>Sparrows Coffee</h2>
              <p>This front-end app allows users to access information about Sparrows Coffee. Users are able to read information, get pricing, book events, and email the company for more information.</p>
              <p>Technologies Used: React.js, Enzyme, HTML, CSS</p>
            </div>
            <div className='project__one__example'>
              <Sparrows className='project__sparrows'/>
            </div>
          </div>
          <div className='project__two'>
            <div className='projContent'>
              <img className='bulb' src={bulb1} alt='one bulb'/>
              <h2>1T3 Life</h2>
              <p>This app allows users to access content for theological training purpose. The user can also download selected content in pdf format. The App displays twelve squares to select. Each square directs the user to a content page, which allows the user to view the content and download the content.</p>
              <p>Technologies Used: React.js, Enzyme, HTML, CSS</p>
            </div>
            <div className='project__two__example'>
              <div />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
