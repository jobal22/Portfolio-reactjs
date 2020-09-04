import React, { Component } from 'react';
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
            <a className='DLTitle' href= {f.content} download={f.name}><img className='DLImg' src={f.logo} alt={f.images}/></a>
          </div>)}
        </div>
      </div>
    )
  }
}
