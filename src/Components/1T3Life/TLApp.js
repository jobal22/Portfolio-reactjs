import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './Img/logo2.png';
import TLMenu from './TLMenu/TLMenu';
// import PDF from '../PDFComponent/PDF';
// import Popup from '../PopupComponent/Popup';
// import "animate.css/animate.min.css";
import './TLApp.css';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     showPopup: true
  //   };
  // }
  // togglePopup() {
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }

  // renderRoutes() {
  //   return (
  //     <Switch>
  //       <Route exact path='/' component={Menu}/>
  //       <Route exact path='/:pdfId' component={PDF}/>
  //     </Switch>
  //   )
  // }

  render() {
    return (
      <div className='TLApp'>
        <div className='TLAppNavDiv'>
        <nav className="TLApp__nav header-w is-scrolling">
          {/* <Link className="navLink" to={"/"}> */}
            <img className='TLlogo TLimg TLheadtitle' src={logo} alt='Logo'/>
          {/* </Link> */}
          {/* <Link className="navLink" to={"/"}> */}
            <h1 className='TLlogoTitle TLheadtitle'>1T3 LIFE</h1>
          {/* </Link> */}
          <hr className='TLhrHead'></hr>
        </nav>
        </div>
        <div>
          <TLMenu />
        </div>
        {/* <main className='main'>
          {this.renderRoutes()}
          {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </main> */}
        <footer className='TLApp__footer'>
          <p className='TLfooterText'>To God be the glory!<br></br>
          All the handouts on 1T3Life.org are free and are intended for encouragement and educational purposes.</p>
        </footer>
      </div>
    )
  }
}
