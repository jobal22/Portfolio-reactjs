import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import Context from './context';
import SClogo from './Img/SCLogoBig.png';
// import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import AboutUs from './SCComponents/AboutUs/AboutUs';
// import Book from './Components/Book/Book';
// import Team from './Components/Team/Team';
// import Contact from './Components/Contact/Contact';
import './SCApp.css';

export default class App extends Component {

  state = {
    guests: [],
    addGuest: {
      hasError: false,
      touched: false,
      name: '',
    }
  }

  setGuests = guests => {
    this.setState({
      guests
    })
  }

  handleAddGuest = guest => {
    this.setState({
      guests: [...this.state.guests, guest],
    })
  }

  // renderMainRoutes() {
  //   return (
  //     <Switch>
  //       <Route exact path = "/" component={AboutUs}/>
  //       <Route  path = "/book" component={Book}/>
  //       <Route  path = "/team" component={Team}/>
  //       <Route  path = "/contact" component={Contact}/>
  //     </Switch>
  //   )
  // }

  render() {
    // const contextValue = {
    //   guests: this.state.guests,
    //   updateGuest: this.updateGuest,
    // }
    return (
      <div className='SCApp-container'>
        <div className='content-wrap'>
          <div className='SCApp__nav'>
            {/* <Link className='SCnavLink' to={'/'}> */}
              <img className='SClogo img' src={SClogo} alt='SClogo'/>
            {/* </Link> */}
            {/* <div className="topnav">
              <div className="hamburger">
                <HamburgerMenu/>
              </div>
            </div> */}
          </div>
          <div>
            <AboutUs />
          </div>
          {/* <div>
            <Context.Provider value={contextValue}>
              <main className='App__main'>{this.renderMainRoutes()}</main>
            </Context.Provider>
          </div> */}
        </div>
      </div>
    )
  }
}
