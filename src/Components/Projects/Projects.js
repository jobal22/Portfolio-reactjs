import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sparrows from '../SparrowsCoffee/SCApp';
import TLife from '../1T3Life/TLApp';
import scl from '../../Img/scl.png';
import tll from '../../Img/tll.png';
import tpl from '../../Img/tpl.png';

import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1 className='projh'>Projects</h1>
        <div className='projects__content'>
          <div className='projCLI alpha'>
            <a className='projCL' href='https://sparrows-coffee.vercel.app' target='_blank'>
              <img className='projCI' src={scl} alt='sparrows coffee'/>
            </a>
          </div>
          <div className='projCLI beta'>
            <a className='projCL' href='https://www.1t3life.org/' target='_blank'>
              <img className='projCI' src={tll} alt='sparrows coffee'/>
            </a>
          </div>
          <div className='projCLI gamma'>
            <a className='projCL' href='https://church-site.vercel.app/' target='_blank'>
              <img className='projCI' src={tpl} alt='sparrows coffee'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
