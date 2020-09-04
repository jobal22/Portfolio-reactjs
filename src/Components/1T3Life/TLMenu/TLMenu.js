import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from '../TLStore';
import './TLMenu.css';

export default class TLMenu extends Component {
  render() {
    const {files} = STORE;
    return (
      <div className='TLMenu__div'>
        <div className='TLMenu'>
          {files.map(f=>
          <div className='trialDL' key={f.id}>
            {/* <Link className='DLTitle' to={`/${f.id}`}><img className='DLImg' src={f.logo} alt={f.images}/></Link> */}
            <a className='DLTitle' href= {f.content} download={f.name}><img className='DLImg' src={f.logo} alt={f.images}/></a>
          </div>)}
        </div>
      </div>
    )
  }
}
