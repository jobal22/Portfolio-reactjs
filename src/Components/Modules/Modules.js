import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Modules.css";

export default class Modules extends Component {
  render() {
    return (
      <div className="modules">
        <section className="mdHeading">
          <div className="mdHDiv">
            <h1 className="mdHTitle">Equip Modules</h1>
            <p className="mdHMotto">
              Equipping the saints for the work of the ministry
            </p>
          </div>
        </section>
        <section className="mdMods">
          <div className="modCage">
            <p className="modNum">Module 1</p>
            <h4 className="modTitle">New Believers Guide</h4>
          </div>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/gettingstarted">
            <div className="mdLCage">
              <h5 className="mdLN">1.1</h5>
              <h5 className="mdLNa">Getting Started</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/gospel">
            <div className="mdLCage">
              <h5 className="mdLN">1.2</h5>
              <h5 className="mdLNa">The Gospel</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/testimony">
            <div className="mdLCage">
              <h5 className="mdLN">1.3</h5>
              <h5 className="mdLNa">Testimony</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/assurance">
            <div className="mdLCage">
              <h5 className="mdLN">1.4</h5>
              <h5 className="mdLNa">Assurance of Salvation</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/baptism">
            <div className="mdLCage">
              <h5 className="mdLN">1.5</h5>
              <h5 className="mdLNa">Baptism</h5>
            </div>
          </Link>
        </section>
      </div>
    );
  }
}
