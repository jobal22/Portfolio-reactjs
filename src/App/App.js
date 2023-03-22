import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Context from "../Context/Context.js";
import HM from "../Components/HM/HM.js";
import HomePage from "../Components/HomePage/HomePage.js";
import Dashboard from "../Components/Dashboard/Dashboard.js";
import Preferences from "../Components/Preference/Preference.js";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import About from "../Components/About/About";
import Verse from "../Components/Verse/Verse";
import Devotional from "../Components/Devotional/Devotional";
import logo from "../Img/jlog.png";
import "./App.css";
// import logo from "../Img/pwg.png";

import config from "../config";

export default class App extends Component {
  state = {
    devotions: [],
  };

  setDevotions = (devotions) => {
    this.setState({
      devotions,
    });
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      Promise.all([fetch(`${config.API_ENDPOINT}/api/devotions`)])
        .then(([devotionsRes]) => {
          if (!devotionsRes.ok)
            return devotionsRes.json().then((e) => Promise.reject(e));
          return Promise.all([devotionsRes.json()]);
        })
        .then(([devotions]) => {
          this.setState({ loading: false, devotions });
          // console.log("jobal", devotions);
        })
        .catch((error) => {
          console.error({ error });
        });
    });
  }

  updateDevotions = (updateDevotions) => {
    this.setState({
      devotions: this.state.devotions.map((ad) =>
        ad.id !== updateDevotions.id ? ad : updateDevotions
      ),
    });
  };

  renderMainRoutes() {
    return (
      <>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={About} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/verse" component={Verse} />
        <Route exact path="/verse/:verseId" component={Devotional} /> */}
      </>
    );
  }

  render() {
    const contextValue = {
      devotions: this.state.devotions,
      // updateDevotions: this.updateDevotions,
    };
    // console.log("now look", contextValue);
    return (
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <div>
              <Link className="navLink" to={"/"}>
                <img className="logo img" src={logo} alt="Logo" />
              </Link>

              {/* <Auth /> */}
              {/* <Link to={"/registration"}>Signup</Link> */}
              {/* <div className="topnav">
                <div className="hamburger">
                  <HM />
                </div>
              </div> */}
            </div>
          </header>
          <Context.Provider value={contextValue}>
            <main className="Main">
              <ScrollToTop />
              {this.renderMainRoutes()}
            </main>
          </Context.Provider>
          {/* <div className="footer"> */}
          <footer className="">
            <p>Plant | Water | Grow</p>
          </footer>
          {/* </div> */}
        </div>
      </BrowserRouter>
    );
  }
}
