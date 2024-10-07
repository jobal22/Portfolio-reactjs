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
import Modules from "../Components/Modules/Modules.js";
import Gospel from "../Components/NewBelieversLessons/GospelLesson.js";
import GettingStarted from "../Components/NewBelieversLessons/GettingStarted.js";
import Testimony from "../Components/NewBelieversLessons/Testimony.js";
import Assurance from "../Components/NewBelieversLessons/Assurance.js";
import Baptism from "../Components/NewBelieversLessons/Baptism.js";
import Footer from "../Components/Footer/Footer.js";
import Comics from "../Components/Comics/Comics.js";
import logo from "../Img/log.png";
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Disciple" component={Modules} />
        <Route exact path="/Gospel" component={Gospel} />
        <Route exact path="/Gettingstarted" component={GettingStarted} />
        <Route exact path="/Testimony" component={Testimony} />
        <Route exact path="/Assurance" component={Assurance} />
        <Route exact path="/Baptism" component={Baptism} />
        <Route exact path="/Comics" component={Comics} />


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
              <Link className="navLink navFlex" to={"/"}>
                <img className="logo img" src={logo} alt="Logo" />
                <h2>Jobal</h2>
              </Link>

              {/* <Auth /> */}
              {/* <Link to={"/registration"}>Signup</Link> */}
              <div className="topnav">
                <div className="hamburger">
                  <HM />
                </div>
              </div>
            </div>
          </header>
          <Context.Provider value={contextValue}>
            <main className="Main">
              <ScrollToTop />
              {this.renderMainRoutes()}
            </main>
          </Context.Provider>
          <div className="footer">
          <footer className="">
            <Footer/>
            <p>All Rights Reserved</p>
            <p>All Scripture is from the English Standard Version</p>
          </footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
