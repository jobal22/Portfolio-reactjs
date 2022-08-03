import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Context from "../Context/Context.js";
import Team from "../Components/Fabc/Team.js";
import Addresses from "../Components/Fabc/Addresses.js";
import HM from "../Components/HM/HM.js";
import HomePage from "../Components/HomePage/HomePage.js";
import AddressSubmission from "../Components/Fabc/SubmitAddress.js";
import Dashboard from "../Components/Dashboard/Dashboard.js";
import Preferences from "../Components/Preference/Preference.js";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import About from "../Components/About/About";
import logo from "../Img/T4C.png";
import config from "../config";

export default class App extends Component {
  state = {
    addresses: [],
  };

  setAddresses = (addresses) => {
    this.setState({
      addresses,
    });
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      Promise.all([fetch(`${config.API_ENDPOINT}/api/addresses`)])
        .then(([addressesRes]) => {
          if (!addressesRes.ok)
            return addressesRes.json().then((e) => Promise.reject(e));
          return Promise.all([addressesRes.json()]);
        })
        .then(([addresses]) => {
          this.setState({ loading: false, addresses });
        })
        .catch((error) => {
          console.error({ error });
        });
    });
  }

  updateAddress = (updatedAddress) => {
    this.setState({
      addresses: this.state.addresses.map((ad) =>
        ad.id !== updatedAddress.id ? ad : updatedAddress
      ),
    });
  };

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} /> */}
        {/* <Route exact path="/fabc" component={Team} />
        <Route path="/fabc/team/:teamId" component={Addresses} />
        <Route
          path="/fabc/submit-address/:addressId"
          component={AddressSubmission}
        ></Route> */}
        {/* <Route path="/registration" component={""} /> */}
      </>
    );
  }

  render() {
    const contextValue = {
      addresses: this.state.addresses,
      updateAddress: this.updateAddress,
    };
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
