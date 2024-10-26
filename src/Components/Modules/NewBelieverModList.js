import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewBelieversModList extends Component {
  render() {
    return (
      <div>
        <section className="mdList">
          <Link className="mdLink" to="/gettingstarted">
            <div className="mdLCage">
              <h5 className="mdLN">1.0</h5>
              <h5 className="mdLNa">Getting Started</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/gospel">
            <div className="mdLCage">
              <h5 className="mdLN">1.1</h5>
              <h5 className="mdLNa">The Gospel</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/testimony">
            <div className="mdLCage">
              <h5 className="mdLN">1.2</h5>
              <h5 className="mdLNa">Testimony</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/assurance">
            <div className="mdLCage">
              <h5 className="mdLN">1.3</h5>
              <h5 className="mdLNa">Assurance of Salvation</h5>
            </div>
          </Link>
        </section>
        <section className="mdList">
          <Link className="mdLink" to="/baptism">
            <div className="mdLCage">
              <h5 className="mdLN">1.4</h5>
              <h5 className="mdLNa">Baptism</h5>
            </div>
          </Link>
        </section>
      </div>
    );
  }
}
