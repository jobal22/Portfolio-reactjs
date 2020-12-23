import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Links.css';

export default class Links extends Component {
  render() {
    return (
      <div className='navLink1'>
      <Link to='/experience'>About</Link>
      <Link to='/projects'>Resources</Link>
      <Link>Contact</Link>
    </div>
)
  }
}
